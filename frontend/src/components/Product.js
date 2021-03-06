import React from 'react'
import Rating from './Rating'

function Product({product}) {
    return (
        <div className="card">
            <a href={`/product/${product._id}`}>
                <img className="large" src={product.image} alt="Product" />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
                <div className="price">${product.price}</div>
            </div>
        </div>
    )
}

export default Product
