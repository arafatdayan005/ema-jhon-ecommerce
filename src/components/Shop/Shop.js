import React, { useState, useEffect } from 'react'
import Product from '../Product/Product';
import './Shop.css'

function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])
    
  return (
    <div className='shop'>
        <div className='products'>
            {
                products.map(product => 
                    <Product product={product} key={product.id}></Product>
                )
            }
        </div>
        <div className="cart">
            <h2>sdfsdfsdf</h2>
        </div>
    </div>
  )
}

export default Shop