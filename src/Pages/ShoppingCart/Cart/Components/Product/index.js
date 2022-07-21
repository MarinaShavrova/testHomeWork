import ButtonDel from '../ButtonDel';
import Count from '../Count';
import './style.css';

const Product = ({ product, deleteProduct, increase, changeValue, decrease }) => {
	const { img, name, priceTotal, count, id } = product;

    return (

<section className='product'>
	<div className='name'>
		
			<div className='product__img'>
				<img src={img} alt={name} />
			</div>
			<div className='product__title'>{name}</div>
			</div>
			<div className='product__count'>
				<Count count={count} increase={increase} decrease={decrease} changeValue={changeValue} id={id} />
			</div>
			<div className='product__price'>
				{priceTotal} USD
			</div>
			<div className='product__controls'>
				<ButtonDel deleteProduct={deleteProduct} id={id} />
			</div>
		</section>

    );

}
export default Product;