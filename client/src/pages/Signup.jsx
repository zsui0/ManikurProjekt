import React, {useState} from 'react'; 
import AuthService from '../services/auth.service';
import { useNavigate } from "react-router-dom";
import '../styles/login.scss';
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
    <section>
      <div class="form-box-register">
        <div class="form-value">
          <form>
            <h2>Új fiók regisztrálás!</h2>
            <div class="inputbox">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="" />
              <label for="">Felhasználónév: </label>
            </div>
            <div class="inputbox">
              <input type="text" value={last} onChange={(e) => setLast(e.target.value)} id="" />
              <label for="">Vezetéknév: </label>
            </div>
            <div class="inputbox">
              <input type="text" value={first} onChange={(e) => setFirst(e.target.value)} id="" />
              <label for="">Keresztnév: </label>
            </div>
            <div class="inputbox">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
              <label for="">Email: </label>
            </div>
            <div class="inputbox">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="" />
              <label for="">Jelszó: </label>
            </div>
            <div class="inputbox" style={{display:'none'}}>
              <input type="text" value={role} onChange={(e) => setRole(e.target.value)} id="" />
              <label for="">Role: </label>
            </div>
            <button type="button" onClick={() => registerUser()}>Regisztráció</button>
          </form>
        </div>
      </div>
    </section>
  );
};
  
export default Signup;