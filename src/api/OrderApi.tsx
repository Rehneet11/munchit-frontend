import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Order } from "@/types";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
type CheckoutSessionRequest={
    cartItems:{
        menuItemId:string;
        name:string;
        quantity:string;
    }[];
    deliveryDetails:{
        email:string;
        name:string;
        addressLine1:string;
        city:string;
        country:string;
    };
    restaurantId:string;
}

export const useGetOrders=()=>{
    const {getAccessTokenSilently}=useAuth0();
    const getOrdersRequest=async(): Promise<Order[]> =>{
        const accessToken= await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/order`,{
            headers:{
                Authorization:`Bearer ${accessToken}`
            }
        })
        if(!response.ok){
            throw new Error("Error Fetching Orders")
        }
        return response.json()
    }
    const{data: orders,isLoading}=useQuery(
        "fetchOrders",
        getOrdersRequest,{
            refetchInterval:3000,
        }
    );
    return {orders,isLoading};
}
export const useCreateCheckoutSession=()=>{
    const { getAccessTokenSilently }=useAuth0();
    const createCheckoutSessionRequest= async(chekoutSessionRequest:CheckoutSessionRequest)=>{
        const accessToken = await getAccessTokenSilently();
        const response=await fetch(`${API_BASE_URL}/api/order/checkout/create-checkout-session`,{
           method:"POST",
           headers:{
            Authorization:`Bearer ${accessToken}`,
            "Content-Type":"application/json",
           },
           body:JSON.stringify(chekoutSessionRequest),
        });
        if(!response.ok){
            throw new Error("Unable to Create Checkout Session")
        }
        return response.json();
    };

    const {mutateAsync:createCheckoutSession,
        isLoading,
        error,
        reset,
        }=useMutation(createCheckoutSessionRequest);
        if(error){
            toast.error(error.toString())
            reset();
        }
        return{
            createCheckoutSession,
            isLoading
        }
}