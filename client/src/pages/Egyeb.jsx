import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'
const componentInfo=[
    {image: "else1.jpg", price: "22000"},
    {image: "else2.jpg", price: "46000"},
    {image: "else3.jpg", price: "40000"},
    {image: "else4.jpg", price: "62000"},
    {image: "else5.jpg", price: "47000"},
];

const Egyeb=()=>{
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
        </div>
    </>)

}

export default Egyeb;