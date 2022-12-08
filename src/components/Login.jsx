import axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

    let navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errorlist, setErrorlist] = useState([])
    const [error, seterror] = useState('')
    const [isloading, setIsloading] = useState(false)
    function getUser(e) {
        let myUser = { ...user }
        myUser[e.target.name] = e.target.value
        setUser(myUser)
    }
    async function submitEvent(e) {
        e.preventDefault();
        setIsloading(true)
        let result = validation(user)
        if (result.error) {
            setIsloading(false)
            setErrorlist(result.error.details)
        } else {
            let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', user);
            if (data.message === "success") {
                localStorage.setItem("userToKen", data.token);
                setIsloading(false)
                props.getUserData()
                navigate('/productlist/products')
            } else {
                setIsloading(false)
                seterror(data.message)
            }
        }
    }
    function validation(user) {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: Joi.string().pattern(/^[A-Z][a-z]{3,8}$/)
        })
        return schema.validate(user, { abortEarly: false })
    }
    return (<>
        <Helmet>
            <title>login</title>
        </Helmet>
        <div className='container'>
            <h2 className='my-2'> login now</h2>
            {
                errorlist.map((error, index) => {
                    if (index === 4) {
                        return <div key={index} className='alert alert-danger'>password invalid</div>
                    } else {
                        return <div key={index} className='alert alert-danger'>{error.message}</div>
                    }
                })
            }
            {error ? <div className='alert alert-danger'>{error}</div> : ''}

            <form onSubmit={submitEvent}>

                <label htmlFor='email'>email </label>
                <input onChange={getUser} type='email' name='email' className='form-control my-3' />
                <label htmlFor='password'>password </label>
                <input onChange={getUser} type='password' name='password' className='form-control my-3' />
                <button className='btn btn-outline-info'> {isloading ? <i className='fas fa-spinner fa-spin'></i> : "login"}
                </button>
            </form></div></>
    )
}


