import React, {Component} from "react";
import Navbar from "../../../components/Navbar";
import { productDataHistory } from "../../../components/Products/data";
import {
    HistoryTitle,
    HistoryHeader,
    HistorySection
} from './HistoryElements';
import HistoryMain from "./HistoryMain";

class History extends Component{
render(){
    return(
        <>
        <div className='backgroundCart'>
            <Navbar />
            <HistoryHeader/>
            <HistorySection>
             <HistoryTitle>History</HistoryTitle>       
                <HistoryMain historyArr={productDataHistory}/>
            </HistorySection>
        </div>
        </>
    )
}

}
export default History;