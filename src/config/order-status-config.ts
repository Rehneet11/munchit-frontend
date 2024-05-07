import { OrderStatus } from "@/types";

type OrderStatusInfo={
    label:string;
    value:OrderStatus;
    progressValue:number;
}

export const ORDER_STATUS:OrderStatusInfo[]=[
    {label:"Placed",value:"placed",progressValue:0},
    {label:"Awaiting Confirmation", value:"paid",progressValue:10},
    {label:"In Progress", value:"inProgress",progressValue:40},
    {label:"Out For Delivery",value:"outForDelivery",progressValue:80},
    {label:"Delivered",value:"delivered",progressValue:100}
]