import React, { useState} from 'react';
import AuthService from '../services/auth.service';
  
const Profile = (user) => {

  


    
  console.log(user);

  return (
    <div>
      {user.currentUser === undefined ? ( <></> 
            ) : (
              <>
                <p>Vezetéknév: {user.currentUser.lastName}</p>
                <p>Keresztnév: {user.currentUser.firstName}</p>
                <p>E-mail cím: {user.currentUser.email}</p>
                <p>Felhasználónév: {user.currentUser.name}</p>
                    
              </>  
            )}
    </div>
  );
};

export default Profile;
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