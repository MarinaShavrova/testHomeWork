import CartHeader from "./Components/CartHeader";
import Product from "./Components/Product";
import CartFooter from "./Components/CartFooter";
import React, {useState, useEffect} from "react";
import FormSubmit from "./Components/FormSubmit";



const CartMain = ({data}) =>{

    const [cart, setCart] = useState(data);

	const [total, setTotal] = useState({
			price: cart.reduce((prev, curr)=> Math.ceil((Number(prev) + Number(curr.priceTotal))*100)/100, 0),
			count: cart.reduce((prev, curr)=> prev + curr.count, 0)
	})

	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => Math.ceil((Number(prev) + Number(curr.priceTotal))*100)/100, 0),
			count: cart.reduce((prev, curr) => prev + curr.count , 0),
		});
	}, [cart])

    const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product)=> id !== product.id));
		deleteProductFromCart(id);		
	}

	const increase = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					
					let newCount = product.count + 1;
					let newTotalPrice = Math.ceil((((product.count + 1) * product.price)*100)/100);

					return {
						...product,
						count: newCount,
						priceTotal: newTotalPrice,
					};
				}
				return product
			})
		})
	}

	const decrease = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {

					const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
					
					return {
						...product,
						count: newCount,
						priceTotal: Math.ceil((newCount * product.price)*100)/100,
					};

					
				}
				return product
			})
		})
	}

	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {				
						addedDataToArr(id, value, Math.ceil((value * product.price)*100)/100);
					return {
						...product,
						count: value,
						priceTotal: Math.ceil((value * product.price)*100)/100
					}
				}
				return product
			})
		})
	}

	function addedDataToArr(id, count, priceTotal){
		
			for(let i=0; i < data.length ; i++){
                    if (data[i].id === id){
                        data[i].count = count;
                        data[i].priceTotal = priceTotal;
                    break;
                    }  
                }  
	}

	function deleteProductFromCart(id){
		const index = data.findIndex(n => n.id === id);
			if (index !== -1) {
  				data.splice(index, 1);
			}
	}

    const products = cart.map((product) => {

		return (
			<Product
				product={product}
				key={product.id} 
                deleteProduct={deleteProduct}
                increase={increase}
				decrease={decrease}
				changeValue={changeValue}			
			/>
		);			
	})

    return (
<section className="cart">
    <CartHeader />
     {products}
     <CartFooter total={total}/>   
	 <FormSubmit data={Object.values(data)} total={total} />	
</section>
    );
}

export default CartMain;