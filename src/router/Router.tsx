import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import CheckOut from '../pages/CheckOut/CheckOut'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const Router = () => {
  return (
    <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='shop/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
        <Route path='checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
    </Routes>
  )
}

export default Router