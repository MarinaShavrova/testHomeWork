import React from "react";
import ProductButton from "../ButtonAddToCart/"
import {productDataCart} from "./data"
    
import {
    ProductsContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTittle,
    ProductCard,
    ProductDesc,
    ProductImg,
    ProductInfo,
    ProductPrice
} from './ProductsElements'


const Products = ({heading, data, type}) =>{
    return (
<ProductsContainer>
<ProductsHeading>{heading}</ProductsHeading>
<ProductWrapper>
    {data.map((product, index) =>{
        return(
            <ProductCard key={index}>
                <ProductImg src={product.img} alt={product.alt} />
                    <ProductInfo>
                        <ProductTittle>{product.name}</ProductTittle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                           <ProductButton
				                button={product.button}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                img={product.img}
                                data={productDataCart}
                                type={type}
			                />
                    </ProductInfo>
            </ProductCard>
        )
    }  
    )}
</ProductWrapper>
</ProductsContainer>
    )
}

export default Products