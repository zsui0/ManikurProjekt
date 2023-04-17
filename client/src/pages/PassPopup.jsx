import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'



function Popup(props) {
    
    const [passOut, setPassOut] = useState({});

    useEffect(() => {        
        setPassOut(props.pass);
    }, []);

    function output(){
        props.setTrigger(false);
    }

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner" >
                <h1>Kérem adja meg az új jelszót:</h1>
                <form>
                <div className="inputDiv">                    
                    <label className="input-label">Új jelszó:</label>
                    <input className="text-input" id="nOut" type="text" defaultValue="123456" onChange={(e)=>setPassOut(e.target.value)}></input>
                </div>                
                <div>
                    <button className="pButtonLeft" onClick={()=>props.setTrigger(false)}>Vissza</button>
                    <button className="pButtonRight" onClick={()=>output()}>Mentés</button>
                </div>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup