import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'



function Popup(props) {
    
    const [lastNameOut, setLastNameOut] = useState({});
    const [firstNameOut, setFirstNameOut] = useState({});
    const [emailOut, setEmailOut] = useState({});
    const [userNameOut, setUserNameOut] = useState({});

    useEffect(() => {        
        setLastNameOut(props.lastName);
        setFirstNameOut(props.firstName);
        setEmailOut(props.email);
        setUserNameOut(props.userName);
    }, []);

    function output(){
        props.setTrigger(false);
    }

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner" >
                <h1>Kérem adja meg az adatokat:</h1>
                <form>
                <div className="inputDiv">
                    <label className="input-label">Vezetéknév:</label>
                    <input className="text-input" id="nOut" type="text" defaultValue={props.lastName} onChange={(e)=>setLastNameOut(e.target.value)}></input>
                </div>
                <div className="inputDiv vanish">
                    <label className="input-label">Keresztnév:</label>
                    <input className="text-input" id="pOut"type="text" defaultValue={props.firstName} onChange={(e)=>setFirstNameOut(e.target.value)}></input>
                </div>
                <div className="inputDiv vanish">
                    <label className="input-label">E-mail cím:</label>
                    <input className="text-input" id="pOut"type="text" defaultValue={props.email} onChange={(e)=>setEmailOut(e.target.value)}></input>
                </div>
                <div className="inputDiv vanish">
                    <label className="input-label">Felhasználónév:</label>
                    <input className="text-input" id="pOut"type="text" defaultValue={props.userName} onChange={(e)=>setUserNameOut(e.target.value)}></input>
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