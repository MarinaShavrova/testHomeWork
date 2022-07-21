import React, {Component, useState} from "react";
import "./Navbar.css";
import logoMcD from './images/McD/logo.png';
import logoKFC from './images/KFC/logo.svg';
import logo from './images/logo.png';
import mainLogo from './images/main-logo.webp';

import {Link} from 'react-router-dom'; 
import Modal from "./Modal";
import {productDataCart} from "./Products/data";



    const Navbar = () =>{
const [modalActive, setModalActive] = useState(false);
   
function handleClickAdd(){
        const NAV = document.querySelectorAll('.nav');
        NAV.forEach(nav_el => nav_el.classList.add('visible'))
    }

   function handleClickRemove(){
        const NAV = document.querySelectorAll('.nav');
        NAV.forEach(nav_el => nav_el.classList.remove('visible'))
    }

    const clickModalKFC = () =>{
        if(productDataCart.length != 0){
            if(productDataCart[0].type === "mcdonald"){
                setModalActive(true);
        }
        } else {   handleClickRemove();}
      
        
    }
    
    const clickModalMC = () =>{
        if(productDataCart.length != 0){
   if(productDataCart[0].type === "kfc"){
            setModalActive(true);
           
        }
    }else{
           handleClickRemove();
    }
   
}

    return(
          <header>
        <nav>
            <div className="nav-main">
            <button className="nav-btn open-btn" onClick={handleClickAdd}>
                <div className="shops-btn"> 
                <i className="fas fa-bars"></i>
                <h4>Shops</h4>
                </div>
            </button>
            <div className="shopping-cart">
                <h4>|</h4>
                <Link className="nav-link shopping-cart-link" to="/cart"><h4>Shopping Cart</h4></Link>             
            </div>
            <div className="shopping-history">
                <h4>|</h4>
                <Link className="nav-link shopping-cart-link" to="/history"><h4>History</h4></Link>             
            </div>

            </div>
            <div className="nav nav-black" >
                <div className="nav nav-red">
                    <div className="nav nav-white">
                        <button className="nav-btn close-btn"  onClick={handleClickRemove}>
                            <i className="fas fa-times"></i>
                        </button>
                        <img src={mainLogo} alt="Shops" className="mainLogo" />
                        <ul className="list">
                            <li className="nav-item">
                                <img src={logoMcD} alt="logo" className="logo" />
                                <Link className="nav-link active" to="/mcdonald" onClick={clickModalMC}>McDonald’s</Link>
                            </li>
                            <li className="nav-item">
                                <img src={logoKFC} alt="logo" className="logo" />
                                <Link className="nav-link active" to="/kfc" onClick={clickModalKFC}>KFC</Link>
                            </li>
                            <li className="nav-item">
                                <img src={logo} alt="logo" className="logo" />
                                <Link className="nav-link active" to="#">Other</Link>
                            </li>
                        </ul>
                        <Modal active={modalActive} setActive={setModalActive} data={productDataCart}/>
                    </div>
                </div>
            </div>           
        </nav>
    </header>
    )
}


export default Navbar;