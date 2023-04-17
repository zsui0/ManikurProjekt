import React, { useState} from 'react';
import AuthService from '../services/auth.service';
import Button from 'react-bootstrap/Button';
import ProfilPopup from "./ProfilPopup";
  
const Profile = (user) => {
  
  const[buttonPopup, setButtonPopup] = useState(false);
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[userName,setUserName] = useState("");
  const[password,setPassword] = useState("");

  console.log(user);

  function popupButton(fileName){
    setButtonPopup(true);
    setLastName(lastName);
    setFirstName(firstName);
    setEmail(email);
    setUserName(userName)
  }

  return (
    <>
    <div class="profilDiv">
      {user.currentUser === undefined ? ( <></> 
            ) : (
              <>
                <p>Vezetéknév: {user.currentUser.lastName}</p>                
                <p>Keresztnév: {user.currentUser.firstName}</p>                
                <p>E-mail cím: {user.currentUser.email}</p>                
                <p>Felhasználónév: {user.currentUser.name}</p>
                <button class="profilButton" onClick={()=> popupButton(user.currentUser.lastName,user.currentUser.firstName,user.currentUser.email,user.currentUser.name)}>Adatok szerkesztése</button>                    
              </>  
            )}
    </div>
    <ProfilPopup trigger={buttonPopup} setTrigger={setButtonPopup}  lastName={user.currentUser.lastName} firstName={user.currentUser.firstName} email={user.currentUser.email} userName={user.currentUser.name}>  
    </ProfilPopup>
    </>
  );
};

export default Profile;