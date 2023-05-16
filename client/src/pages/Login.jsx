import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"; 
import AuthService from '../services/auth.service';
import '../styles/login.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const logInUser = async () => {
    //e.preventDefault();
    try{
      await AuthService.login(email, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error)
        }
      )
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
    <section>
      <div class="form-box">
        <div class="form-value">
        <form> 
            <h2>Bejelentkezés</h2>
            <div class="inputbox">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              <label for="">Email: </label>
            </div>
            <div class="inputbox">
              <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
              <label for="">Password: </label>
            </div>

            <button type="button" onClick={() => logInUser()}>Bejelentkezés</button>
        </form>
        </div>
      </div>
    </section>
    </>
  );
};
  
export default Login;