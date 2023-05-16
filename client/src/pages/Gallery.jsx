import React, { useEffect } from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
import Button from 'react-bootstrap/Button';
import PopupII from "./PopupII";
import { useState } from "react";

import GalleryJewelryService from "../services/gallery-jewelry-service";

/*
const componentInfo=[
    {image: "nail1.jpg"},
    {image: "nail2.jpg"},
    {image: "nail3.jpg"},
    {image: "nail4.jpg"},
    {image: "nail5.jpg"},    
    {image: "nail6.jpg"},
    {image: "nail7.jpg"},
    {image: "nail8.jpg"},
    {image: "nail9.jpg"},
];
*/
const Gallery=(user)=>{

    const[buttonPopup, setButtonPopup] = useState(false);
    const[cardFileName, setCardFileName] = useState("");
    const [componentInfo, setComponentInfo] = useState([]);

    function popupButton(fileName){
        setButtonPopup(true);
        setCardFileName(fileName)
    }

    const GetAll = async () => {
        try{
            const components = await GalleryJewelryService.ListAllGallery()
            setComponentInfo(components)
            console.log(componentInfo)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        GetAll()
    }, [])

    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/kepek/"+card.image)} />                
            </Card>
        );
    };


    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}            
            {user.currentUser === undefined ? (  //itt keresd az admint ha nem megy
                <></>
            ) : (
                <>
                    {user.currentUser.role === "admin" ? ( 
                        <Card style={{ width: '18rem' }} className="card">
                            <Card.Body>   
                                <Button style={{width: '14rem', border: "solid black 1px" }} variant = "custom" onClick={()=> popupButton("")}>Új kép felvitele</Button>    
                            </Card.Body>
                        </Card> 
                    ) : (
                        <></>
                    )}
                </>
            )}           
        </div>
        <PopupII trigger={buttonPopup} setTrigger={setButtonPopup}  fileName={cardFileName} type={"gallery"}>  
        </PopupII>
    </>)

}

export default Gallery;