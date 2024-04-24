import Home from '../pages/User/Home'
import Login from '../pages/User/Login'
import Signup from '../pages/User/SignUp'
 import Verify from '../pages/User/Verify'
import {Routes,Route} from 'react-router-dom'

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/user/:id/verify/:token' element={<Verify />} /> {/* Define the route for email verification */}
</Routes>
  )
}

export default Routers