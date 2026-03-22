import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeCOM from './Router/HomeCOM';
import AboutCOM from './Router/AboutCOM';
import ContactusCOM from './Router/ContactusCOM';
import MenuCOM from './Router/MenuCOM';
import ServicesCOM from './Router/ServicesCOM';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bar from './Components/navbar/Bar';
import Footer from './Components/Fotter/Footer';
function App() {
  return (

<>
<Bar/>
    <Routes>
<Route path='/' element={<HomeCOM/>} />
<Route path='/home' element={<HomeCOM/>} />
<Route path='/about' element={<AboutCOM/>} />
<Route path='/contact' element={<ContactusCOM/>} />
<Route path='/menu' element={<MenuCOM/>} />
<Route path='/services' element={<ServicesCOM/>} />
    </Routes>
<Footer/>
  </>
  );
}

export default App;
