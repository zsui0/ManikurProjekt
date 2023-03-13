import React, {useState, useEffect} from 'react';
  
const Home = (user) => {
  return (
    <div>
      <h1>Üdvözlünk a főoldalon!</h1>
      {user.currentUser === undefined ? (
        <h1>Nem vagy bejelentkezve</h1>
      ) : (
        
        <div>
          <h1>Bevagy jelentkezve!</h1>
        </div>
      )}
    </div>
  );
};
  
export default Home;