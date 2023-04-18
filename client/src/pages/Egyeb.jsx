import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import { useState, useEffect } from "react";

import GalleryJewelryService from "../services/gallery-jewelry-service";

/*
const componentInfo=[
    {image: "else1.jpg", price: "22000"},
    {image: "else2.jpg", price: "46000"},
    {image: "else3.jpg", price: "40000"},
    {image: "else4.jpg", price: "62000"},
    {image: "else5.jpg", price: "47000"},
];
*/

const Egyeb=(user)=>{

    const[buttonPopup, setButtonPopup] = useState(false);
    const[cardPrice, setCardPrice] = useState("");
    const[cardFileName, setCardFileName] = useState("");
    const [componentInfo, setComponentInfo] = useState([]);

    function popupButton(price,fileName){
        setButtonPopup(true);
        setCardPrice(price);
        setCardFileName(fileName)
    }

    const GetAll = async () => {
        try{
            const components = await GalleryJewelryService.ListAllJewelry("egyeb")
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
            {user.currentUser === undefined ? (  //itt keresd az admint ha nem megy
                <></>
            ) : (
                <>
                    {user.currentUser.role === "admin" ? ( 
                        <Card style={{ width: '18rem' }}className="card">
                            <Card.Body>   
                                <Button style={{width: '14rem', border: "solid black 1px" }} variant = "custom" onClick={()=> popupButton("","")}>Új ékszer felvitele</Button>    
                            </Card.Body>
                        </Card> 
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}  price={cardPrice} fileName={cardFileName} type={"egyeb"}>  
        </Popup>
        
    </>)

}

export default Egyeb;