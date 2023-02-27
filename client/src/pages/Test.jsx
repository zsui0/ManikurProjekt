import React, {useState, useEffect} from 'react';

const Test = (flask) => {
    /* 
    const getMembers = async() =>{
        const response = await fetch(flask.api_url+"/api/insertdata")
        const data = await response.json();
    
        console.log(data.members);
    }

    useEffect(() => {
        getMembers();
    })
    */

    return (
        <div>
        <h1>Api called</h1>
        </div>
    );
};
  
export default Test;