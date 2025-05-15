import React from 'react';
import Navbar from './Components/Navbar';
import './index.css';
import Home from './Components/Home';
import Productpage from './Components/Productpage';
import Cardpage from './Components/Cardpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Categiry from './Components/Categiry';
import CllectionAll from './Components/CllectionAll';
import { CartProvider } from './Components/CartContext'; 
import Authage from './Components/Authage';  

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/Cardpage" element={<Cardpage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Categiry" element={<Categiry />} />
          <Route path="/category/:categoryName" element={<CllectionAll />} />
          <Route path="/auth" element={<Authage />} /> 
        </Routes>
      </Router>
    </CartProvider> 
  );
}

export default App;
