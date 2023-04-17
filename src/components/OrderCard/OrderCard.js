import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './OrderCard.css'

function OrderCard({ products, deletebtn }) {
    const { id, img, price, name, quantity, shipping } = products

    return (
        <div className='card-item'>
            <img src={img} alt="" />
            <div className='item-details'>
                <p> <span className='item-name'> {name} </span></p>
                <p>Price: <span className='text-orange'>${price}</span></p>
                <p>Quantity: <span className='text-orange'>${quantity}</span></p>
                <p>Shipping Charge: <span className='text-orange'>${shipping}</span></p>
            </div>
            <button className='btn-delete' onClick={() => deletebtn(id)}><FontAwesomeIcon className='icon' icon={faTrashAlt} /></button>
        </div>
    )
}

export default OrderCard