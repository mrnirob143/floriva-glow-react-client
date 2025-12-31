
import { Route, Routes } from "react-router-dom"; // ✅ FIXED
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Product from './Components/Product'
import Login from './Components/Login'
import Register from './Components/Register'
import ForgotPassword from './Components/ForgotPassword'
import ProductCard from './Components/ProductDetails'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import Contact from './Components/Contact'

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
<Route path='/productcard' element={<ProductCard></ProductCard>}></Route>
<Route path='/footer' element={<Footer></Footer>}></Route>
<Route path='/cart' element={<Cart></Cart>}></Route>
<Route path='/contact' element={<Contact></Contact>}></Route>






     </Routes>
    
</div>
 <Footer></Footer>
    </>
  )
}

export default App