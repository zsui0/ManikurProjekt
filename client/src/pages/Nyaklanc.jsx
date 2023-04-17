import React from "react";
import {Card} from "react-bootstrap";

const componentInfo=[
    {image: "'../icons/ekszerek/neck1.jpg'"},      
];

const Nyaklanc=()=>{
    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={()=>require(card.image)}/>
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