import React from 'react'
import './Cart.css'

function Cart({cart}) {
    let totalPrice = 0;
    let totalShipping = 0;

    cart.map(product => {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
        console.log(totalShipping)
    })

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h4>Selected items: {cart.length}</h4>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand total: ${grandTotal.toFixed(2)} </h4>
        </div>
    )
}

export default Cart