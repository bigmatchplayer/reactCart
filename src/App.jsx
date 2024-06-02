
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'

import Products from './pAGES/Products'
import Cart from './pAGES/Cart'

import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Products/>} />
      <Route path='/cart' element={<Cart/>} />
      


    </Routes>
    
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App
