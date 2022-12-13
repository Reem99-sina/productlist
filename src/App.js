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
    <Header logout={logout} userData={userData} />
    {/* <ProductList /> */}
    <Routes>
      <Route path='/' element={<ProductList />} />

      <Route path='productlist' element={<ProductList />} />
      <Route path='/productlist/register' element={<Register />} />
      <Route path='/productlist/login' element={<Login getUserData={getUserData} />} />
      <Route path='cartPage' element={<Cartpage />} />
      <Route path='/productlist/product' element={<ProductDetials />} >
        <Route path=':productId' element={<ProductDetials />} />
      </Route>

      {/* <Route path='*' element={<ProductList />} /> */}

    </Routes>

  </>
  );
}

export default App;
