import Delete from '../../images/icons/cross.svg';
import './style.css'

const ButtonDel = ({ deleteProduct, id }) => {
	return (
		<button type='button' onClick={()=>{deleteProduct(id);}}>
		<i className="fas fa-times"></i>
		</button>
	);
};

export default ButtonDel;