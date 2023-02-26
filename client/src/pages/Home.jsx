import React, {useState, useEffect} from 'react';
import httpClient from '../httpClient';
  
const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async() => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me")
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated!");
      }
      
      
      
    })();
  }, []);

  return (
    <div>
      <h1>Üdvözlünk a főoldalon!</h1>
      {user != null ? (
        <div>
          <h1>Bevagy jelentkezve!</h1>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>
        </div>
      ) : (
        <h1>Nem vagy bejelentkezve</h1>
      )}
    </div>
  );
};
  
export default Home;