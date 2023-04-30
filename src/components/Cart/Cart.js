import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart({ cart, clearbtn }) {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    console.log(clearbtn)

    cart.map(product => {
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    })

    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax
    return (
        <div className='cart-side'>
            <h2>Order Summary</h2>
            <h4>Selected items: {quantity}</h4>
            <p>Total Price: ${totalPrice} </p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h4>Grand total: ${grandTotal.toFixed(2)} </h4>
            <button className='btn-clear' onClick={clearbtn}>Clear Cart <FontAwesomeIcon icon={faTrashAlt} /></button>
            <Link to="/inventory">
                <button className='btn-checkout' onClick={clearbtn}>Proceed Checkout <FontAwesomeIcon icon={faCartShopping} /></button>
            </Link>

        </div>
    )
}

export default Cart