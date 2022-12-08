import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from './redux/actions/productAction'

export default function Header(props) {
    const products = useSelector((state) => state.allProducts.products)
    let count = useSelector((state) => state.counter)
    if (count < 0) {
        count = 0
    }
    const display = useDispatch()
    function search(ele) {
        localStorage.setItem("searchValue", ele.target.value)
        let productSearch = products.filter((ele) => {
            return ele.category.startsWith(localStorage.getItem('searchValue')) ? ele : ""
        })
        display(searchProducts(productSearch))
        console.log(productSearch)
    }
    return (<>
        <Helmet>
            <title>header</title>
        </Helmet>
        <div className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/productlist/products'>fake shop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        
                            <li className="nav-item">
                                <Link className="nav-link" to="/productlist/products">Products</Link>
                            </li>
                    
                        
                    </ul>
                    <input type="text" placeholder='search men cloth or women cloth or jewelery' className='form-control w-50' onBlur={(ele) => search(ele)} />
                    <div>
                        <Link className='btn btn-outline-dark' to="/productlist/login"><i className='fas fa-sign-in'></i> login</Link>
                        <Link className='btn btn-outline-dark mx-2' to='/productlist/register'><i className='fas fa-user-plus '></i> register</Link>

                        <Link className='btn btn-outline-dark' to='/productlist/cartPage' ><i className='fas fa-shopping-cart'></i> cart({count})</Link>
                        <Link className='btn btn-outline-dark' onClick={props.logout}> logout</Link>




                    </div>
                </div>
            </div>
        </div>
    </>

    )
}
