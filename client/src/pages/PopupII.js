import React, { useState,useEffect,ChangeEvent } from "react";
import '../styles/Popup.scss'
import UploadHandler from "./UploadHandler";
import GalleryJewelryService from "../services/gallery-jewelry-service";

function Popup2(props) {

    /* const [fileNameOut, setFileNameOut] = useState({}); */

    /* const AddGallery = async () => {
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
    } */

    /* useEffect(() => {
        setFileNameOut(props.fileName);        
    }, []); */

    function output(){
        props.setTrigger(false);
    }

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner" >
                <h1>Kérem adja meg az adatokat:</h1>
                <form>
                <UploadHandler props={props}/>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup2