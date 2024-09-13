import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: restaurant, isLoading, error, isError } = useQuery(
    ["fetchRestaurant", restaurantId], // Cache key includes restaurantId
    getRestaurantByIdRequest,
    {
      enabled: !!restaurantId,  // Only query if restaurantId exists
      staleTime: 5 * 60 * 1000, // 5 minutes cache
      retry: 2, // Retry 2 times before failing
    }
  );

  return { restaurant, isLoading, error, isError };
};

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  // Fetch popular or default restaurants on initial load (before any search query)
  const fetchDefaultRestaurants = async (): Promise<RestaurantSearchResponse> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?page=1&sortOption=bestMatch`
    );

    if (!response.ok) {
      throw new Error("Failed to get default restaurants");
    }

    return response.json();
  };

  // Fetch restaurants based on the search query
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();

    if (searchState.searchQuery) {
      params.set("searchQuery", searchState.searchQuery);
    }

    params.set("page", searchState.page.toString());

    if (searchState.selectedCuisines.length > 0) {
      params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    }

    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant search results");
    }

    return response.json();
  };

  // Use `react-query` to fetch default restaurants on initial page load
  const { data: defaultResults, isLoading: isDefaultLoading, error: defaultError } = useQuery(
    ["fetchDefaultRestaurants", city],
    fetchDefaultRestaurants,
    {
      enabled: !!city, // Only query if city is available
      staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
      retry: 1, // Retry once before throwing error
      refetchOnWindowFocus: false, // Avoid refetching on window focus
    }
  );

  // Use `react-query` to fetch results based on search query
  const { data: results, isLoading: isSearchLoading, error: searchError } = useQuery(
    ["searchRestaurants", searchState, city], // Include city and searchState in the cache key
    createSearchRequest,
    {
      enabled: !!city && (searchState.searchQuery || searchState.selectedCuisines.length > 0), // Only fetch when there is a query
      staleTime: 10 * 60 * 1000, // Cache results for 10 minutes
      retry: 1, // Retry once before throwing error
      refetchOnWindowFocus: false, // Avoid refetching on window focus
    }
  );

  return {
    // Use default results if no search is active
    results: results || defaultResults,
    isLoading: isSearchLoading || isDefaultLoading,
    error: searchError || defaultError,
  };
};
