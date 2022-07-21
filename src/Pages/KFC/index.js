import './KFC.css'
import React, {Component} from "react";
import Navbar from "../../components/Navbar";
import Products from '../../components/Products';
import {productDataKFC} from '../../components/Products/data'
import {
    KFCContainer
} from './KFCelements';



class McDonald extends Component{
  render(){
    return(
        <>
        <div className='background-kfc'>
            <KFCContainer/>
                <Navbar />
                 <Products heading = 'Choose your favorite' data={productDataKFC} type ='kfc'/>
        </div>
       </>
        )
    }
}
export default McDonald;