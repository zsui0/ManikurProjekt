import React from "react";
import {Card} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import { useState } from "react";

const componentInfo=[
    {image: "neck1.jpg", price: "58000"},
    {image: "neck2.jpg", price: "20000"},
    {image: "neck3.jpg", price: "90000"},
    {image: "neck4.jpg", price: "32000"},
    {image: "neck5.jpg", price: "36000"},
    {image: "neck6.jpg", price: "73000"},
];

const Nyaklanc=(user)=>{

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
                <Card.Img variant="top" src={require("../icons/ekszerek/"+card.image)}/>
                <Card.Body>
                    <Card.Text>Ár: {card.price} Ft</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}
            {user.role == "admin" ? (  //itt keresd az admint ha nem megy
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

export default Nyaklanc;