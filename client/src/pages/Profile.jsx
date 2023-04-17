import React, { useState} from 'react';
import AuthService from '../services/auth.service';
  
const Profile = (props) => {

  const[userName,setUserName] = useState("");
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[role,setRole] = useState("");


    if (props.currentUser !== undefined) {
      setUserName((props.currentUser.name));
      console.log(userName);
      setLastName((props.currentUser.lastName));
      console.log(lastName);
      setFirstName((props.currentUser.firstName));
      console.log(firstName);
      setEmail((props.currentUser.email));
      console.log(email);
    }


  return (
    <div>
    {props.currentUser === undefined ? (<p>Jelentkezzen be!</p>) : (<p>Bejelentkezve</p>)}
    </div>
  );
};

export default Profile;