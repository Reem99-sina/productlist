import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, deletecart } from './redux/actions/productAction'

export default function Cartcolumn() {
    const cart = [...useSelector((prevState) => prevState.addcart.products)]
    let renderList = []
    let dispatch = useDispatch()
    function decreaseCount(ele) {
        dispatch(decrease())
        dispatch(deletecart(ele.target.dataset.id))
    }
    renderList = cart.map((product) => {
        return <tr key={product.id} className='col-md-4 g-4'>
            <td><img src={product.image} class="card-img-top w-50" alt="..." /></td>
            <td><h5 class="card-title fw-bold">{product.title}</h5></td>
            <td> <p className='fw-bold'>${product.price}</p></td>
            <td><button className='btn btn-outline-dark' data-id={product.id} onClick={(ele) => decreaseCount(ele)}>decrease</button></td>
        </tr>
    })
    return renderList


}
