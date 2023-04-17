import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import { useState } from "react";

const componentInfo=[
    {image: "ring1.jpg", price: "69000"},
    {image: "ring2.jpg", price: "65000"},
    {image: "ring3.jpg", price: "19000"},
    {image: "ring4.jpg", price: "19000"},
    {image: "ring5.jpg", price: "57000"},
    {image: "ring6.jpg", price: "75000"},
    {image: "ring7.jpg", price: "90000"},
    {image: "ring8.jpg", price: "49000"},
];

const Gyuru=(user)=>{

    const[buttonPopup, setButtonPopup] = useState(false);
    const[cardPrice, setCardPrice] = useState("");
    const[cardFileName, setCardFileName] = useState("");

    function popupButton(price,fileName){
        setButtonPopup(true);
        setCardPrice(price);
        setCardFileName(fileName)
    }

    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/ekszerek/"+card.image)} />
                <Card.Body>
                    <Card.Text>Ár: {card.price} Ft</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}
            {user.role === "admin" ? (  //itt keresd az admint ha nem megy
            <Card style={{ width: '18rem' }}className="card">
                <Card.Body>   
                    <Button variant = "custom" onClick={()=> popupButton("","")}>Új ékszer felvitele</Button>    
                </Card.Body>
            </Card>)
            :
            (<></>)}
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}  price={cardPrice} fileName={cardFileName}>  
        </Popup>
    </>)

}

export default Gyuru;