import React from "react";
import Navbar from '../Navbar';
import {MainContainer} from './MainElement'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Cart from './../../Pages/ShoppingCart/Cart';
import McDonald from "../../Pages/McD";
import KFC from "../../Pages/KFC";
import History from "../../Pages/ShoppingCart/History";


const Main = () =>{
return(
 
    <Router>
    <MainContainer>        
        <Navbar />
        <Routes>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/mcdonald" element={<McDonald />}/>
        <Route path="/kfc" element={<KFC />}/>
        <Route path="/history" element={<History />}/>
        </Routes>        
    </MainContainer>
    </Router>
      
)
};

export default Main;