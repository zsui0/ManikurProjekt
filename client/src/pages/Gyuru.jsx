import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
import Button from 'react-bootstrap/Button';
import Popup from "./Popup";
import { useState, useEffect } from "react";

import GalleryJewelryService from "../services/gallery-jewelry-service";

/*
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
*/

const Gyuru=(user)=>{

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
            const components = await GalleryJewelryService.ListAllJewelry("gyuru")
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
                                <Button style={{width: '14rem', border: "solid black 1px" }} variant = "custom" onClick={()=> popupButton("","")}>Új gyűrű felvitele</Button>    
                            </Card.Body>
                        </Card> 
                    ) : (
                        <></>
                    )}
                </>
            )}
        </div>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}  price={cardPrice} fileName={cardFileName} type={"gyuru"}>  
        </Popup>
    </>)

}

export default Gyuru;