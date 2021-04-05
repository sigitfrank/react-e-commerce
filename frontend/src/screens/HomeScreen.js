import React from 'react'
import data from '../data.js'
import Product from '../components/Product'
function HomeScreen() {
    return (
        <div className="row center">
        {
          data.products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
      </div>
    )
}

export default HomeScreen
