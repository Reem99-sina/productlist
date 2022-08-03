import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function ProductComponent() {
    let valueSearch = useSelector((state) => state.products.products)
    const products = useSelector((state) => state.allProducts.products)
    console.log(valueSearch)

    if (valueSearch.length !== 0) {
        const renderListSearch = valueSearch.map((product) => {
            return <><Helmet>
                <title>product component</title>
            </Helmet><div key={product.id} className='col-md-4 g-4'>
                    <Link to={`/product/${product.id}`} className='text-decoration-none text-dark'>
                        <div class="card " >
                            <img src={product.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title fw-bold">{product.title}</h5>
                                <p className='fw-bold'>${product.price}</p>
                                <p>{product.category}</p>
                            </div>
                        </div></Link></div></>
        })
        return (renderListSearch)
    } else {
        console.log(products)
        const renderList = products.map((product) => {
            return <div key={product.id} className='col-md-4 g-4'>
                <Link to={`/product/${product.id}`} className='text-decoration-none text-dark'>
                    <div class="card">
                        <img src={product.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{product.title}</h5>
                            <p className='fw-bold'>${product.price}</p>
                            <p>{product.category}</p>
                        </div>
                    </div></Link></div>
        })
        return (renderList)
    }


}
