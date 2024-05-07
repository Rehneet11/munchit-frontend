import { useGetOrders } from "@/api/OrderApi"
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage=()=>{
    const {orders,isLoading}=useGetOrders();
    if(isLoading){
        return "Loading Please Wait ..."
    }
    if(!orders || orders.length===0){
        return " No Orders Placed"
    }
    return (
        <div className="space-y-10">
            {orders.map((order)=>(
                <div className="space-y-10 bg-slate-300 p-10 rounded-lg">
                    <OrderStatusHeader order={order}/>
                    <div className="grid gap-10 md:grid-cols-2">
                        <OrderStatusDetail order={order}/>
                        <AspectRatio ratio={16/5}>
                            <img src={order.restaurant.imageUrl} className="rounded-lg object-cover h-full w-full"/>
                        </AspectRatio>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default OrderStatusPage;