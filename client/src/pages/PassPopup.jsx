import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'

import ProfileService from "../services/profile-service";



function Popup(props) {
    
    const [passOut, setPassOut] = useState("");
    const [emailOut, setEmailOut] = useState("");

    const setNewPass = async () => {
        console.log("PopUp log:"+emailOut)
        try{
            await ProfileService.changePass(passOut,emailOut)
                .then((resp) => {
                    console.log(resp)
                },
                (error) => {
                    console.log(error)
                })
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {        
        setPassOut(props.pass);
        //console.log("useffect:")
        if(emailOut == "")
            setEmailOut(props.email);
    }, [emailOut]);

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
                    <button className="pButtonRight" onClick={()=>setNewPass()}>Mentés</button>
                </div>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup