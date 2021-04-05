import React, { useEffect } from 'react'
import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../actions/productAction'
function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productListing)
    const {loading, error, products} = productList
    useEffect(() => {
        dispatch(listProduct())
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
