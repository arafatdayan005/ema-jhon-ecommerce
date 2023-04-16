import React, { useState, useEffect } from 'react'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';

function Shop() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    function handleCart(product) {
        const newCart = [...cart, product]
        setCart(newCart);
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