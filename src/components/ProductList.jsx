import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/actions/productAction'
import { Helmet } from 'react-helmet'

const ProductList = () => {
    const [data, setdata] = useState([])
    const display = useDispatch()
    async function getProducts() {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        display(setProducts(data))
        setdata(data)
        
    }
    useEffect(() => {
        getProducts()
    })
    return (
        <>
            <Helmet>
                <title>product details</title>
            </Helmet>

            <div className='container'>
                <div className='row'>
                    {data ? <ProductComponent /> : ""}
                </div></div> </>
    )
}
export default ProductList