import React, { useState} from 'react';
import AuthService from '../services/auth.service';
  
const Profile = (props) => {

  const[userName,setUserName] = useState("");
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");




  return (
    <div>
    {props.currentUser === undefined ? (<p>Jelentkezzen be!</p>) : (<div>{props.currentUser.email}</div>)}
    </div>
  );
};

export default Profile;