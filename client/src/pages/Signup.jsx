import React, {useState} from 'react'; 
import AuthService from '../services/auth.service';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  
  const registerUser = async () => {
    //e.preventDefault();
    try {
      await AuthService.signup(email, password, first, last, username, role)
        .then(
          (response) => {
            console.log(response)
            navigate("/login");
            window.location.reload();
          },
          (error) => {
            console.log(error)
          }
      )
    } catch (error) {
      if(error.response.status === 401){
        alert("Invalid credentials");
      }
    }
    
  };
  
  return (
    <div>
      <h1>Új fiók regisztrálás!</h1>
      <form>
          <div>
            <label >Felhasználónév: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="" />
          </div>
          <div>
            <label >Vezetéknév: </label>
            <input type="text" value={last} onChange={(e) => setLast(e.target.value)} id="" />
          </div>
          <div>
            <label >Keresztnév: </label>
            <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} id="" />
          </div>
          <div>
            <label >Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
          </div>
          <div>
            <label >Jelszó: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
          </div>
          <div>
            <label >Role: </label>
            <input type="text" value={role} onChange={(e) => setRole(e.target.value)} id="" />
          </div>
          <button type="button" onClick={() => registerUser()}>Regisztráció</button>
      </form>
    </div>
  );
};
  
export default Signup;