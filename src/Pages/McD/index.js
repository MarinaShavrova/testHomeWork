import './McD.css'
import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Products from '../../components/Products';
import {productData} from '../../components/Products/data'
import {
    McDContainer
} from './McDElements';



class McDonald extends Component{
  render(){
    return(
        <>
        <div className='background'>
            <McDContainer/>
                <Navbar />
                 <Products heading = 'Choose your favorite' data={productData} type = 'mcdonald'/>
        </div>
       </>
        )
    }
}
export default McDonald;