import React from "react";
import {Card} from "react-bootstrap";

const componentInfo=[
    {image: "neck1.jpg"},
    {image: "neck2.jpg"},
    {image: "neck3.jpg"},
    {image: "neck4.jpg"},
    {image: "neck5.jpg"},
    {image: "neck6.jpg"},
];

const Nyaklanc=()=>{
    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/ekszerek/"+card.image)}/>
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