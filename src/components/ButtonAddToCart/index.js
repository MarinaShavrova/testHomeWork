import React from "react";
import './style.css'

const ProductButton = ({ button, id, img, name, price, data, type}) => {

    function addedToCart(){
        alert("Added to Cart");
        
            if (data.length != 0){
                for(let i=0; i < data.length ; i++){
                    if (data[i].id === id){
                        data[i].count = data[i].count + 1;
                        data[i].priceTotal = Math.ceil((data[i].count * data[i].price)*100)/100;

                    break;
                    }  
                }  
            }
            data.push({
                    id : id,
                    img : img,
                    name : name,
                    price : price,
                    priceTotal : price,
                    count : 1,
                    type : type
                 });
    }

	return (
		<button className="add-to-cart__button" onClick={addedToCart}>{button}</button>
	);
};

export default ProductButton;