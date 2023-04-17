import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';
  
const Profile = (props) => {

  const[userName,setUserName] = useState("");
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log(user);
      setUserName(user.name);
      console.log(userName);
    }
    

  }, []);


  return (
    <div>
    {props.currentUser === undefined ? (<p>Jelentkezzen be!</p>) : (<p>Bejelentkezve</p>)}
    </div>
  );
};

export default Profile;