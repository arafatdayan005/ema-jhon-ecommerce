import React, { useState, useEffect } from 'react'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const endcart = []
        for (const id in storedCart) {
            const saveProduct = products.find(product => product.id === id)
            if (saveProduct) {
                const quantity = storedCart[id];
                saveProduct.quantity = quantity;
                endcart.push(saveProduct)
            }
        }
        setCart(endcart)
    }, [products])


    function handleCart(product) {
        let newCart = []
        const exist = cart.find(pd => pd.it == product.id)
        if(!exist){
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.it !== product.id)
            newCart = [...remaining, exist];
        }
        setCart(newCart);
        addToDb(product.id)
    };

    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product =>
                        <Product product={product} key={product.id} handleCart={handleCart}></Product>
                    )
                }
            </div>
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop