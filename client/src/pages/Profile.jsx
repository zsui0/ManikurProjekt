import React, { useState} from 'react';
import AuthService from '../services/auth.service';
import Button from 'react-bootstrap/Button';
import ProfilPopup from "./ProfilPopup";
import PassPopup from "./PassPopup";
import '../styles/Profil.scss'
  
const Profile = (user) => {
  
  const[buttonPopup, setButtonPopup] = useState(false);
  const[lastName,setLastName] = useState("");
  const[firstName,setFirstName] = useState("");
  const[email,setEmail] = useState("");
  const[userName,setUserName] = useState("");
  const[password,setPassword] = useState("");
  const[adatMod,setAdatMod] = useState("");

  console.log(user);

  function popupButton(lastName,firstName,email,userName){
    setButtonPopup(true);
    setAdatMod(true);
    setLastName(lastName);
    setFirstName(firstName);
    setEmail(email);
    setUserName(userName)
  }

  function passPopupButton(password){
    setButtonPopup(true);
    setAdatMod(false);
    setPassword(password)
  }

  return (
    <>
    <section>
      {user.currentUser === undefined ? ( <></> 
            ) : (
              <div class="form-box">
              <div class="form-value">
                <h5>Vezetéknév: {user.currentUser.lastName}</h5>                
                <h5>Keresztnév: {user.currentUser.firstName}</h5>                
                <h5>E-mail cím: {user.currentUser.email}</h5>                
                <h5>Felhasználónév: {user.currentUser.name}</h5>
                <button class="profilButton" onClick={()=> popupButton(user.currentUser.lastName,user.currentUser.firstName,user.currentUser.email,user.currentUser.name)}>Adatok szerkesztése</button>
                <button class="profilButton" onClick={()=> passPopupButton("")}>Jelszómódosítás</button>
              </div>  
              </div>
            )}
    </section>
    {adatMod===true ? (
    <ProfilPopup trigger={buttonPopup} setTrigger={setButtonPopup}  lastName={user.currentUser.lastName} firstName={user.currentUser.firstName} email={user.currentUser.email} userName={user.currentUser.name}>  
    </ProfilPopup>)
    :
    (<PassPopup trigger={buttonPopup} setTrigger={setButtonPopup}  pass={""}>      
    </PassPopup>)
    }
    </>
  );
};

export default Profile;