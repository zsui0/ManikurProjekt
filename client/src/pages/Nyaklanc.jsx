import React from "react";
import {Card} from "react-bootstrap";

const componentInfo=[
    {image: "neck1.jpg", price: "58000"},
    {image: "neck2.jpg", price: "2000"},
    {image: "neck3.jpg", price: "90000"},
    {image: "neck4.jpg", price: "32000"},
    {image: "neck5.jpg", price: "36000"},
    {image: "neck6.jpg", price: "73000"},
];

const Nyaklanc=()=>{
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
        </div>
    </>)

}

export default Nyaklanc;