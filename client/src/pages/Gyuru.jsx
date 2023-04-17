import React from "react";
import {Card} from "react-bootstrap";

const componentInfo=[
    {image: "ring1.jpg"},
    {image: "ring2.jpg"},
    {image: "ring3.jpg"},
    {image: "ring4.jpg"},
    {image: "ring5.jpg"},
    {image: "ring6.jpg"},
    {image: "ring7.jpg"},
    {image: "ring8.jpg"},
];

const Gyuru=()=>{
    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/ekszerek/"+card.image)} />
            </Card>
        );
    };

    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}            
        </div>
    </>)

}

export default Gyuru;