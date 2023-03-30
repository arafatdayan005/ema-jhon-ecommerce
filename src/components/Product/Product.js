import React from 'react'
import './Product.css'

function Product(props) {
    const {img, name, price, ratings, seller} = props.product;
  return (
    <div className='product'>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h5>Price: {price}</h5>
        <div className='others'>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
        </div>   
        <button className="btn-cart">Add to Cart</button>
    </div>
  )
}

export default Product