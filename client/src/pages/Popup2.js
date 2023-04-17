import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'

function Popup2(props) {
       
    const [fileNameOut, setFileNameOut] = useState({});

    useEffect(() => {
        setFileNameOut(props.fileName);
        //console.log("name:", nameOut , props.title);
    }, []);

    function output(){
        props.setTrigger(false);        
        //console.log(document.getElementById("nOut").value);
        //console.log("name:", nameOut , props.title);
    }

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner" >
                <h1>Kérem adja meg az adatokat:</h1>
                <form>
                <div className="inputDiv">
                    <label className="input-label">Képfájl neve:</label>
                    <input className="text-input" id="nOut" type="text" defaultValue={props.fileName} onChange={(e)=>setFileNameOut(e.target.value)}></input>
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

export default Popup2