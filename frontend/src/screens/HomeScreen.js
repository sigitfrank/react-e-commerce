import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
function HomeScreen() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get('/api/prodsucts')
                setProducts(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div>
            {loading ? (<LoadingBox />) : error ? (<MessageBox variant="error">{error}</MessageBox>) :
                (<div className="row center">
                    {products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))}
                </div>
                )}

        </div>


    )
}

export default HomeScreen
