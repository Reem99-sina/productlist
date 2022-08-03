import './App.css';
import Header from './components/Header';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
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
    navigate('/login')
  }
  function Forwardorback({ children }) {
    if (!localStorage.getItem("userToKen")) {
      <Navigate to='/login' />
    } else {
      return children
    }
  }
  return (<>
    <Header logout={logout} userData={userData} />
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login getUserData={getUserData} />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/cartPage' element={<Forwardorback><Cartpage /></Forwardorback>} />
      <Route path='product/:productId' element={<Forwardorback><ProductDetials /></Forwardorback>} />
      <Route path='*' element={<h3>404</h3>} />
    </Routes>
  </>
  );
}

export default App;
