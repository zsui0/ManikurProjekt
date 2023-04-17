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