import React, { useState, useEffect } from 'react';
import AuthService from '../services/auth.service';
  
const Profile = (props) => {

  const[userName,setUserName] = useState("");
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[role,setRole] = useState("");
  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      console.log(user);

      setUserName(JSON.stringify(user.name));
      console.log(userName);
      setLastName(JSON.stringify(user.lastName));
      console.log(lastName);
      setFirstName(JSON.stringify(user.firstName));
      console.log(firstName);
      setEmail(JSON.stringify(user.email));
      console.log(email);
    }
    

  }, []);


  return (
    <div>
    {props.currentUser === undefined ? (<p>Jelentkezzen be!</p>) : (<p>Bejelentkezve</p>)}
    </div>
  );
};

export default Profile;