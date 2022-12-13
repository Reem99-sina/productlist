import axios from 'axios'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProducts, removeProductReducer, increase, addcart } from './redux/actions/productAction'

export default function ProductDetials() {
    const product = useSelector((state) => state.product)
    const { image, title, price, category, description } = product
    const { productId } = useParams()
    const dispatch = useDispatch()
    async function singleProduct() {
        await axios.get(`https://fakestoreapi.com/products/${productId}`).then(({ data }) => {
            dispatch(selectedProducts(data)).catch((error)=>{
                console.log(error)
            })

        })
    }
    function increaseCount() {
        dispatch(increase())
        dispatch(addcart(product))
    }
    useEffect(() => {
        if (productId && productId !== "")
            singleProduct()
        return () => {
            dispatch(removeProductReducer())
        }
    },[productId])
    return (<>
        <Helmet>
            <title>product details</title>
        </Helmet>
        <div className='container'>
            {product ?
                <div class="row g-5" >
                    <div className='col-md-6'>
                        <img src={image} class="card-img-top" alt="..." /></div>
                    <div className='col-md-6'>
                        <div class="card-body ">
                            <h5 class="card-title fw-bold">{title}</h5>
                            <p className='bg-info p-2 d-inline-block rounded'> ${price}</p>
                            <p className='bg-secondary rounded text-danger p-2 fw-bold'>{category}</p>
                            <p className='fw-bold'>{description}</p>
                            <button className='btn btn-danger text-white' onClick={increaseCount}  > Add product</button>
                        </div></div>
                </div> : <div className='fw-bold'>.....loading</div>}
        </div></>
    )
}
