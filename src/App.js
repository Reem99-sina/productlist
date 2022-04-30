import './App.css';
import Header from './components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom'
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
  return (<>
    <Header logout={logout} userData={userData} />
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login getUserData={getUserData} />} />
      <Route path='/productlist' element={<ProductList />} />
      <Route path='/cartPage' element={<Cartpage />} />
      <Route path='product/:productId' element={<ProductDetials />} />
      <Route path='*' element={<h3>404</h3>} />
    </Routes>
  </>
  );
}

export default App;
