import type { MenuItem } from '../types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
type Props={
    menuItem:MenuItem;
    addToCart:()=>void;
}

const MenuItem =({menuItem,addToCart}:Props)=>{
    return(
        <Card className='cursor-pointer bg-red-50 border-red-200'>
            <CardHeader>
                <CardTitle>
                    {menuItem.name}
                </CardTitle>
            </CardHeader>
            <CardContent className='font-bold flex justify-between'>
                <span>{(menuItem.price)}₹</span>
                <span>
                    <Button onClick={addToCart} className='bg-red-400 rounded-lg'> Add To Cart</Button>
                </span>
            </CardContent>
        </Card>
    )
}

export default MenuItem;
