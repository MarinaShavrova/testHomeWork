import "./style.css"

const HistoryResult = ({product, phone, email}) => {
    if(phone && phone.length != 0){
if (product.phone === phone) {
    let count = 0;
for (let index = 0; index < product.order.length; index++) {
           count = count+ product.order[index].count;      
}
    return (
<>
<section className='product main'>
	    <div className="product__history">	
			<div className='product__address'>
                <p>
                Address: {product.address}
                </p>
            </div>
            <div className='product__phone'><p>
                Phone: {product.phone}
                </p>
            </div>
            <div className='product__email'><p>
                Email: {product.email}
                </p>
            </div>
        </div>
            <div className='product__cost__history'><p>
                Units: {count}
                </p>
            </div>
			
			<div className='product__price__history'>
				{product.total.price} USD
			</div>
		</section>
</>
    );
}

} else if (email && email.length != 0){
if (product.email === email) {
    return (
<>
<section className='product'>
	    <div className="product__history">	
			<div className='product__address'>
                <p>
                Address: {product.address}
                </p>
            </div>
            <div className='product__phone'><p>
                Phone: {product.phone}
                </p>
            </div>
            <div className='product__email'><p>
                Email: {product.email}
                </p>
            </div>
        </div>
            <div className='product__cost__history'><p>
                Units: {product.order.length}
                </p>
            </div>
			
			<div className='product__price__history'>
				{product.total.price} USD
			</div>
		</section>
</>
    );
}

}
}

export default HistoryResult;