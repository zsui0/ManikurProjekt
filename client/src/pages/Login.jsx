import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"; 
import AuthService from '../services/auth.service';

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
    <div>
      <h1>Bejelentkezés a fiókodba!</h1>
      <form> 
          <div>
            <label >Email: </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label >Password: </label>
            <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={() => logInUser()}>Bejelentkezés</button>
      </form>
    </div>
  );
};
  
export default Login;