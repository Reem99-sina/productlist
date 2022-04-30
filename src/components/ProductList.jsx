import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import ProductComponent from './ProductComponent'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/actions/productAction'

const ProductList = () => {
    const [data, setdata] = useState([])
    const display = useDispatch()
    async function getProducts() {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        display(setProducts(data))
        setdata(data)
        console.log(data)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {data ? <ProductComponent /> : ""}
            </div></div>
    )
}
export default ProductList