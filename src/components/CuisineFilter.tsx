import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
    onChange: (cuisines: string[]) => void;
    selectedCuisines: string[];
    isExpanded: boolean;
    onExpandedClick: () => void;
}

const CuisineFilter = ({
    onChange,
    selectedCuisines,
    isExpanded,
    onExpandedClick,
}: Props) => {
    const handleCuisinesReset = () => onChange([]);
    const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const clickedCuisine = event.target.value;
        const isChecked = event.target.checked;
        const newCuisinesList = isChecked
            ? [...selectedCuisines, clickedCuisine]
            : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);
        onChange(newCuisinesList);
    };

    return (
        <>
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300">
                <div className="text-lg font-bold text-gray-800">
                    Filter By Cuisines
                </div>
                <div onClick={handleCuisinesReset}
                    className="text-sm font-medium underline cursor-pointer text-blue-600 hover:text-blue-800">
                    Reset Filters
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
                {cuisineList.slice(0, isExpanded ? cuisineList.length : 6).map((cuisine) => {
                    const isSelected = selectedCuisines.includes(cuisine);
                    return (
                        <div key={cuisine} className="flex items-center">
                            <input
                                id={`cuisine_${cuisine}`}
                                type="checkbox"
                                className="hidden"
                                value={cuisine}
                                checked={isSelected}
                                onChange={handleCuisinesChange}
                            />
                            <Label
                                htmlFor={`cuisine_${cuisine}`}
                                className={`flex items-center cursor-pointer rounded-full px-5 py-2 shadow-sm transition-all duration-200 ease-in-out
                                    ${isSelected
                                        ? "border-2 border-amber-500 bg-gray-900 text-white"
                                        : "border border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-100"}`}
                            >
                                {isSelected && <Check size={20} strokeWidth={3} className="mr-2 text-amber-500" />}
                                {cuisine}
                            </Label>
                        </div>
                    );
                })}
            </div>
            <Button onClick={onExpandedClick} variant="link" className="mt-4 text-base font-medium text-blue-600 hover:text-blue-800">
                {isExpanded ? (
                    <span className="flex items-center">
                        View Less <ChevronUp className="ml-1" />
                    </span>
                ) : (
                    <span className="flex items-center">
                        View More <ChevronDown className="ml-1" />
                    </span>
                )}
            </Button>
        </>
    );
};

export default CuisineFilter;
