import React from "react";
import {Card} from "react-bootstrap";
import '../styles/cards.scss'


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

const Gallery=()=>{
    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require("../icons/gallery/"+card.image)} />                
            </Card>
        );
    };

    return(<>
        <div className="box">
            {componentInfo.map(renderCard)}            
        </div>
    </>)

}

export default Gallery;