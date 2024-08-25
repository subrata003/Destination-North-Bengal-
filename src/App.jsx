import './App.css'
import Darjeeling from './Darjeeling'
import Sikkim from './Sikkim'
import Bhutan from './Bhutan'
import Dooars from './Dooars'
import Home from '../Home'
import Header from './components/Header'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import Error from './Error'
import About from "./About";
import Other from './Other'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="darjeeling" element={<Darjeeling />} />
        <Route path="bhutan" element={<Bhutan />} />
        <Route path="dooars" element={<Dooars />} />
        <Route path="sikkim" element={<Sikkim />} />
        <Route path="About" element={<About/>} />
        <Route path="Other" element={<Other/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      
    </BrowserRouter>

  )
}

export default App
