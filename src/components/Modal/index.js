import React from "react";

import "./modal.css"

const Modal = ({active, setActive, data}) =>{
    	
    function deleteArr(){
     
data.splice(0,data.length);
 setActive(false)
          
        }          

      return(
        <>
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h3>You have unfinished purchases</h3>
                <p>The basket will be emptied upon transition.</p>
                <div className="modal-button">
                    <button className="button-ok" onClick={deleteArr}>Ok</button>
                </div>
            </div>
        </div>
        
        </>
)
    
}

export default  Modal;