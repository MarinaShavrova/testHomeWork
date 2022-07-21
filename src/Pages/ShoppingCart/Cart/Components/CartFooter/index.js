import './style.css';

const CartFooter = ({ total }) => {
	const { count, price } = total;

	return (
		<footer className='cart-footer'>
			<div className='cart-footer__count'>Unit: {count} </div>
			<div className='cart-footer__price'>
				{price} USD
			</div>
		</footer>
	);
};

export default CartFooter;