import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import { useState } from "react";


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

const Gallery=(user)=>{

    const[buttonPopup, setButtonPopup] = useState(false);
    const[cardFileName, setCardFileName] = useState("");

    function popupButton(price,fileName){
        setButtonPopup(true);
        setCardFileName(fileName)
    }

    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/gallery/"+card.image)} />                
            </Card>
        );
    };

    console.log(user)

    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}            
            {user.currentUser === "admin" ? (  //itt keresd az admint ha nem megy
            <Card style={{ width: '18rem' }}className="card">
                <Card.Body>   
                    <Button variant = "custom" onClick={()=> popupButton("","")}>Új ékszer felvitele</Button>    
                </Card.Body>
            </Card>)
            :
            (<></>)}           
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}  fileName={cardFileName}>  
        </Popup>
    </>)

}

export default Gallery;