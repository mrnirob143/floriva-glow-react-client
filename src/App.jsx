
import { Route, Routes } from 'react-router'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Product from './Components/Product'
import Login from './Components/Login'
import Register from './Components/Register'
import ForgotPassword from './Components/ForgotPassword'

function App() {


  return (
    <>
     <Header></Header>
<div className='container mx-auto'>
       <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/products' element={<Product></Product>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>
<Route path='/forgotpassword' element={<ForgotPassword></ForgotPassword>}></Route>



     </Routes>
</div>
    </>
  )
}

export default App