import { Restaurant } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";
type Props={
    restaurant:Restaurant;
}
const RestaurantInfo=({restaurant}:Props)=>{
    return (
        <Card className="border-slate-300 bg-amber-50 p-2">
            <CardHeader>
                <CardTitle className="text-3xl font-bold tracking-tight">
                    {restaurant.restaurantName}
                </CardTitle>
                <CardDescription>
                    {restaurant.city},{restaurant.state}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex ">
                {restaurant.cuisines.map((item,index)=>(
                    <span className="flex text-slate-500">
                        <span>{item}</span>
                        {index < restaurant.cuisines.length-1 && <Dot/>}
                    </span>
                ))}
            </CardContent>
        </Card>
    )
}

export default RestaurantInfo
