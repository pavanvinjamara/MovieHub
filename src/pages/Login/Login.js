import React, {useState} from 'react'
import Logo from '../../assets/logomovie.png'
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      console.log('Login....');
      navigate('/');
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className='login-container'>
      <header className='login-header'>
        <img src={Logo} alt="logo" className='logo'/>
        <div className='btn-contain'>
          <span> <Link to={'/'} className="login-links">Home</Link></span>
          <button className='reg-btn' > <Link to={'/register'} className="login-link">Register</Link></button>
        </div>
      </header>
      <div className='login-form'>
        <form onSubmit={handleLogin} className="form-container">
          <h5>Sign in to your account</h5>
          <input type="text" name='email' placeholder='Email' className='inputs' 
            onChange={(event) => setEmail(event.target.value)}  required/><br/>
          <input type="password" name="password" placeholder='Password' className='inputs'  onChange={(event) => setPassword(event.target.value)} required/><br/>
          {error && <p className="error-message">{error}</p>}
          <button type='submit' className='login-btn'>Login</button>
          <p>New user? go to Register</p>
        </form>
      </div>
    </div>
  )
}

export default Login;
