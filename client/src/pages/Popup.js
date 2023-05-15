import React, { useState,useEffect } from "react";
import '../styles/Popup.scss'
import UploadHandler from "./UploadHandler";
import GalleryJewelryService from "../services/gallery-jewelry-service";

function Popup(props) {

    const [typeOut, setTypeOut] = useState({})
    const [priceOut, setPriceOut] = useState({});
    const [fileNameOut,setFileNameOut] = useState({});

    const AddJewelry = async () => {
        console.log(fileNameOut+" : "+priceOut+" : "+typeOut)
        try{
            await GalleryJewelryService.AddJewelry(fileNameOut, priceOut, typeOut)
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
        setPriceOut(props.price);
        setTypeOut(props.type)
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
                <div className="inputDiv vanish">
                    <label className="input-label">Ár:</label>
                    <input className="text-input" id="pOut"type="text" defaultValue={props.price} onChange={(e)=>setPriceOut(e.target.value)}></input>
                </div>                
                <UploadHandler props={props} price={priceOut}/>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup