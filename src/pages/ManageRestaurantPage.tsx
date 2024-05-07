import { useCreateMyRestaurant, useGetMyOrdersForRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm"
import OrderItemCard from "@/components/OrderItemCard";

const ManageRestaurantPage=()=>{
    const {createRestaurant,isLoading:isCreateLoading} = useCreateMyRestaurant();
    const {restaurant}=useGetMyRestaurant();
    const {updateRestaurant,isLoading:isUpdateLoading}=useUpdateMyRestaurant();
    const isEditing= !!restaurant;

    const {orders} = useGetMyOrdersForRestaurant();
    return (
        <Tabs defaultValue="orders">
            <TabsList>
                <TabsTrigger value="orders">
                    Orders
                </TabsTrigger>
                <TabsTrigger value="manage-restaurant">
                    Manage Restaurant
                </TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="space-y-7 bg-slate-300 p-7 rounded-lg">
                <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
                {orders?.map((order)=>(
                    <OrderItemCard order={order}/>
                ))}
            </TabsContent>
            <TabsContent value="manage-restaurant">
            <ManageRestaurantForm restaurant={restaurant} onSave={isEditing?updateRestaurant:createRestaurant} isLoading={isCreateLoading || isUpdateLoading}/>
            </TabsContent>
        </Tabs>
        
    )
}
export default ManageRestaurantPage;