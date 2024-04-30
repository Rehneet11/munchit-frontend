import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props={
    index:number;
    removeMenuItem:()=>void;
}

const MenuItemInput=({index,removeMenuItem}:Props)=>{
    const {control} = useFormContext();

    return (
        <div className="flex flex-row items-end gap-2">
            <FormField control={control} name={`menuItems.${index}.name`} 
            render={({field})=>(<FormItem>
                <FormLabel className="flex items-center gap-1">
                    Name <FormMessage/>
                </FormLabel>
                <FormControl>
                    <Input {...field} placeholder="Bhature Cholle" className="bg-slate-400"/>
                </FormControl>
            </FormItem>)}/>
            <FormField control={control} name={`menuItems.${index}.price`} 
            render={({field})=>(<FormItem>
                <FormLabel className="flex items-center gap-1">
                    Price(₹) <FormMessage/>
                </FormLabel>
                <FormControl>
                    <Input {...field} placeholder="100" className="bg-slate-400"/>
                </FormControl>
            </FormItem>)}/>
        <Button type="button" onClick={removeMenuItem} className="bg-black text-white max-h-fit hover:bg-red-600">Remove</Button>
        </div>
    )
}

export default MenuItemInput;