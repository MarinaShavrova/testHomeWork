import React, {useEffect, useState} from "react";
import HistoryResult from "./HistoryResult";
import "./history.css"

const HistoryMain = ({historyArr}) =>{
    const [active, setActive] = useState(false);
    
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    
    const[formValid, setFormValid] = useState(false);

    useEffect( () => {
    if(emailError || phoneError){
        setFormValid(false);
    } else{
        setFormValid(true);
    }
    } , [emailError, phoneError]

)

    const emailHandler = (e) => {
        setEmail(e.target.value)
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         if(!re.test(String(email).toLowerCase())){
            setEmailError('This email address is incorrect');
        }else {
            setEmailError("");
            setPhoneError("");
        }  
    }

    const phoneHandler = (e) =>{
          setPhone(e.target.value)     
        if(e.target.value.length < 9 || e.target.value.length > 14){
            setPhoneError("This phone is incorrect");
         }else{
            setPhoneError("");
            setEmailError("");
         }      
    }

	const blurHandler = (e) => {
        console.log(e.target.name)
        switch (e.target.name){
            case 'email' :
                setEmailDirty(true);
                break
            case 'phone' :
                setPhoneDirty(true);
                break
        }

    }

    function searchData(event){
        event.preventDefault(); 
          setActive(true);

    }  
const products = historyArr.map((product) => {
   console.log(product);
    return(
        <HistoryResult product={product} phone={phone} email={email}/>
    )

  
    })
     
return (
    <>
        <div className='form-container'>
			<form className='form'>
               <div className='input-text'>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <input onChange={e => emailHandler(e)} value={email}  name="email"  type="email" placeholder="Email" onBlur={e => blurHandler(e)}/>
                </div>
                <div className='input-text'> 
                    {(phoneDirty && phoneError) && <div style={{color:'red'}}>{phoneError}</div>}  
                    <input onChange={e => phoneHandler(e)} value={phone}  name="phone"  type="tel" placeholder="Phone" onBlur={e => blurHandler(e)}/>
                </div> 
                       <div className='submit-button'>
                    <button className='submit-button button' disabled={!formValid} type="submit" onClick={searchData}>Submit</button>
                </div>
            </form>          
        </div>
        <div className={active ? "result active" : "result"} onClick={() => setActive(false)}>
            <div className="result-content" onClick={e => e.stopPropagation()}>
                
            <header className="result-header">
                    <div className="result-header__title">Name</div>
                    <div className="result-header__count">Count</div>
                    <div className="result-header__cost">Cost</div>
            </header>
            <div className="main__result__history">
                    <div className="product__cart__history">
                        {products}
                    </div>
                
                </div>
            </div>
        </div> 
    </>

)
}

export default HistoryMain;