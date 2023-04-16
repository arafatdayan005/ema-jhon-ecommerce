import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

function Product(props) {
    const {img, name, price, ratings, seller} = props.product;
    const handleCart = props.handleCart;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <div className='others'>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
        </div>   
        <button onClick={() => handleCart(props.product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
    </div>
  )
}

export default Product