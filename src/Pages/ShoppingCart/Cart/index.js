import React, {Component} from "react";
import Navbar from "../../../components/Navbar";
import {
    CartTitle,
    CartHeader,
    CartSection
} from './CartElements';

import CartMain from "./CartMain";
import {productDataCart} from "../../../components/Products/data";


class Cart extends Component{
render(){
    return(
        <>
        <div className='backgroundCart'>
            <Navbar />
            <CartHeader/>
            <CartSection>
             <CartTitle>Cart</CartTitle>       
                <CartMain heading = 'Choose' data={productDataCart}/>
            </CartSection>
        </div>
        </>
    )
}

}

export default Cart;