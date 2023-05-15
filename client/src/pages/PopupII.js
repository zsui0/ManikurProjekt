import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'

import GalleryJewelryService from "../services/gallery-jewelry-service";

function Popup2(props) {

    const [fileNameOut, setFileNameOut] = useState({});

    const AddGallery = async () => {
        try{
            await GalleryJewelryService.AddGallery(fileNameOut)
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error)
                })
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setFileNameOut(props.fileName);        
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
                    <label className="input-label">Válasszon ki egy fájlt:</label>
                    <input className="text-input" id="nOut" type="file" defaultValue={props.fileName} onChange={(e)=>setFileNameOut(e.target.value)}></input>
                </div>
                <div>
                    <button className="pButtonLeft" onClick={()=>props.setTrigger(false)}>Vissza</button>
                    <button className="pButtonRight" onClick={()=>AddGallery()}>Mentés</button>
                </div>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup2