import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import OrderCard from '../OrderCard/OrderCard';
import './Orders.css'

function Orders() {
    const products = useLoaderData();
    const storedCart = getShoppingCart();
    const savedCart = [];
    const [cart, setCart] = useState(savedCart)

    for (const id in storedCart) {
        const savedProduct = products.find(pd => pd.id == id);

        if (savedProduct) {
            const quantity = storedCart[id];
            savedProduct.quantity = quantity;
            savedCart.push(savedProduct);
        }
    }

    function deletebtn(id){
        const remaining = cart.filter(item => item.id != id);
        setCart(remaining);
        removeFromDb(id);
    }

    function clearbtn() {
        setCart([])
        deleteShoppingCart();
    }

    return (
        <div className='shop'>
            <div className='order-item'>
                {
                    cart.map(p =>
                        <OrderCard key={p.id} products={p} deletebtn={deletebtn}></OrderCard>
                    )
                }
            </div>
            <div className='cart'>
                <Cart cart={cart} clearbtn={clearbtn}></Cart>
            </div>
        </div>
    )
}

export default Orders