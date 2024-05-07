import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";
type Props={
    order:Order;
}
const OrderStatusHeader=({order}:Props)=>{

    const expectedDelivery=()=>{
        const created=new Date(order.createdAt);
        created.setMinutes(created.getMinutes()+order.restaurant.deliveryTime);
        const hours=created.getHours();
        const minutes=created.getMinutes();
        const paddedMinutes=minutes<10?`0${minutes}`:minutes;
        return `${hours}:${paddedMinutes}`;
    }

const getOrderStatusInfo=()=>{
    return (ORDER_STATUS.find((oo)=>oo.value === order.status)||ORDER_STATUS[0]);
}

    return(
        <>
        <h1 className="text-4xl font-bold tracking-tighter flex flex-col gap-5 md:flex-row md:justify-between">
            <span>Order Status:{getOrderStatusInfo().label}</span>
            <span>Expected by :{expectedDelivery()}</span>
        </h1>
        <Progress className="animate-pulse bg-white" value={getOrderStatusInfo().progressValue}/>
        </>
    )
}
export default OrderStatusHeader;