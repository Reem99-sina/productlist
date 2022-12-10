import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetials from './components/ProductDetials';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import Cartpage from './components/Cartpage';

function App() {
  let navigate = useNavigate()
  const [userData, setuserData] = useState(null)
  function getUserData() {
    let decodedDate = jwtDecode(localStorage.getItem("userToKen"))
    setuserData(decodedDate)
    console.log(userData)
  }

  function logout() {
    localStorage.removeItem('userToKen')
    setuserData(null)
    navigate('/productlist/login')
  }
  // function Forwardorback({ children }) {
  //   if (!localStorage.getItem("userToKen")) {
  //     return <Navigate to='/productlist/login' />
  //   } else {
  //     return children
  //   }
  // }
  return (<>
    <BrowserRouter>
      <Header logout={logout} userData={userData} />
      <ProductList />
      <Routes>
        <Route path='/' element={<ProductList />} />

        <Route path='productlist' element={<ProductList />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login getUserData={getUserData} />} />
        {/* <Route path='/productlist/products' element={<ProductList />} /> */}
        <Route path='cartPage' element={<Cartpage />} />
        <Route path='product/:productId' element={<ProductDetials />} />
        <Route path='*' element={<h3>404</h3>} />
      </Routes></BrowserRouter>
  </>
  );
}

export default App;
