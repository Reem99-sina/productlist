import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Cartcolumn from './Cartcolumn.jsx'


export default function Cartpage() {
    const cart = useSelector((prevState) => prevState.addcart.products)
    let total = 0

    cart.forEach(element => {
        total += element.price
    })
    console.log(total)
    return (<>
        <div className='container'>
            <table class="table">
                <tbody>
                    {cart ? <Cartcolumn /> : ""}
                    <tr>
                        <td>total</td>
                        <td>{total}</td>
                    </tr>
                </tbody>
            </table></div>
    </>
    )
}
