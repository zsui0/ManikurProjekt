import React from "react";
import {Card} from "react-bootstrap";

const componentInfo=[
    {image: "{require('../icons/ekszerek/ring1.jpg')}"},
    {image: "{require('../icons/ekszerek/ring2.jpg')}"},
    {image: "{require('../icons/ekszerek/ring3.jpg')}"},
    {image: "{require('../icons/ekszerek/ring4.jpg')}"},
    {image: "{require('../icons/ekszerek/ring5.jpg')}"},
    {image: "{require('../icons/ekszerek/ring6.jpg')}"},
    {image: "{require('../icons/ekszerek/ring7.jpg')}"},
    {image: "{require('../icons/ekszerek/ring8.jpg')}"},
];

const Gyuru=()=>{
    const renderCard=(card, index) =>{
        return(
            <Card style={{ width: '18rem'}} key={index} className="card">
                <Card.Img variant="top" src={require('../icons/ekszerek/ring1.jpg')}/>
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