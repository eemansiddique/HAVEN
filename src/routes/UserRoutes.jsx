import Home from '../pages/User/Home'
import {Routes,Route} from 'react-router-dom'
import NotFound from '../pages/NotFound/NotFound'
import Form from '../pages/User/Form'
import Layout2 from '../pages/User/Layout2'
import Layout3 from '../pages/User/Layout3'
import Layout1 from '../pages/User/Layout1'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/forms' element={<Form />} />
      {/* <Route path='/forms' element={<Layout1 />} />
      <Route path='/forms2' element={<Layout2 />} />
      <Route path='/forms3' element={<Layout3 />} /> */}

    {/* <Route path='/home' element={<Home />}/> */}
    <Route path='*' element={<NotFound />}/>

</Routes>
  )
}

export default Routers