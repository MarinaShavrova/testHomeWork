import './style.css';
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"; 
import {productDataHistory, productDataCart} from "../../../../../components/Products/data";

const FormSubmit = ({data, total}) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [name, setName] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [addressDirty, setAddressDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);

    const [emailError, setEmailError] = useState('This field can\'t be empty');
    const [phoneError, setPhoneError] = useState('This field can\'t be empty');
    const [addressError, setAddressError] = useState('This field can\'t be empty');
    const [nameError, setNameError] = useState('This field can\'t be empty');

const[formValid, setFormValid] = useState(false);

useEffect( () => {
    if(emailError || addressError || nameError || phoneError){
setFormValid(false);
    } else{
        setFormValid(true);

    }
} , [emailError, addressError, nameError, phoneError]

)
    const emailHandler = (e) => {
        setEmail(e.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())){
            setEmailError('This email address is incorrect');
        }else {
            setEmailError("");
        }
    }
   
    const addressHandler = (e) =>{
         setAddress(e.target.value)
         if(e.target.value.length < 3){
            setAddressError("This address is incorrect");
         }else{
            setAddressError("");
         }
    }
     const phoneHandler = (e) =>{
            setPhone(e.target.value)
        if(e.target.value.length < 9 || e.target.value.length > 14){
            setPhoneError("This phone is incorrect");
         }else{
            setPhoneError("");
         }

    }
     const nameHandler = (e) =>{
        setName(e.target.value)
         if(e.target.value.length < 2){
            setNameError("Name is incorrect");
         }else{
            setNameError("");
         }
    }

	const blurHandler = (e) => {
        switch (e.target.name){
            case 'email' :
                setEmailDirty(true);
                break
            case 'address' :
                setAddressDirty(true);
                break
            case 'name' :
                setNameDirty(true);
                break
            case 'phone' :
                setPhoneDirty(true);
                break
            }        
        }

    function submitAdd(event){
        event.preventDefault();

        if(data.length == 0){
            alert("Add products to order")            
        }else{

let order = [];
let id_const = 0;

order.push.apply(order, data);

productDataHistory.push({
    id: id_const,
    order : order,
    total : total,
    address : address,
    phone : phone,
    email : email,
    name : name
});

let test = [];
data.push.apply(data, test);
productDataCart.splice(0,data.length);

alert("Your order has been successfully sent to work.");

navigate("/history");
        }
        
    }

    return (
        <>
		<div className='form-container'>
			<form className='form'>
                <h1>Form</h1>
                <div className='input-text'>
                    {(addressDirty && addressError) && <div style={{color:'red'}}>{addressError}</div>}
                    <input onChange={e => addressHandler(e)} value={address} name="address" type="text" placeholder="Address" onBlur={e => blurHandler(e)}/>
                </div>
                <div className='input-text'>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email}  name="email"  type="email" placeholder="Email" onBlur={e => blurHandler(e)}/>
                </div>
                <div className='input-text'> 
                    {(phoneDirty && phoneError) && <div style={{color:'red'}}>{phoneError}</div>}
                    <input onChange={e => phoneHandler(e)} value={phone}  name="phone"  type="tel" placeholder="Phone" onBlur={e => blurHandler(e)}/>
                </div> 
                <div className='input-text'>
                    {(nameDirty && nameError) && <div style={{color:'red'}}>{nameError}</div>}
                    <input onChange={e => nameHandler(e)} value={name} name="name"  type="text" placeholder="Name" onBlur={e => blurHandler(e)}/>
                </div>
                <div className='submit-button'>
                    <button className='submit-button button' disabled={!formValid} type="submit" onClick={submitAdd}>Submit</button>
                </div>
            
            </form>
            
		</div>
        </>
	);
};

export default FormSubmit;