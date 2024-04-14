import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GIRLPIC_URL } from '../utils/constants';
import "./Login.css"
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("clicked")
    onLogin(); // Indicate successful login
    navigate('/'); // Redirect to the main application
  };

  const imgop2="https://thesend.academy/wp-content/uploads/2023/05/SA_headerimage_bloborange-1280x1109.png";
  const imgop1="https://seoaudit.agency/wp-content/uploads/2020/06/professional-Brochure-Design-with-the-Best-Graphics-Designer-in-Bangladesh.png"
  const loginStyles = {
    container: {
      display: 'flex',
      flexDirection: 'column', // Adjusted to stack elements vertically
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 40px)', // Adjusted to reduce space
    },
    loginBox: {
      backgroundColor: '#FFCBA4',  
      maxWidth: '400px',
      width: '100%',
      padding: '20px',
      boxSizing: 'border-box',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px', // Added margin at the bottom
    },
    input: {
      width: '100%',
      marginBottom: '15px',
      padding: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      boxSizing: 'border-box',
    },
    button: {
      width: '100%',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    girlPic: {
        width: '35vw', // Adjust width as needed
        height: 'auto', // Automatically adjust height to maintain aspect ratio
      },
  };

  return (
   <div className='login-page'>
    <div class="wrapper">
         <div class="title-text">
            <div class="title login">
               Account 
            </div>
            <div class="title signup">
               Account
            </div>
     </div>
         <div class="form-container">
            <div class="slide-controls">
               <input type="radio" name="slide" id="login" />
               <input type="radio" name="slide" id="signup"/>
               <label htmlFor="login" class="slide login">Login</label>
               <label htmlFor="signup" class="slide signup">SignUp</label>
               <div class="slider-tab"></div>
            </div>
            <div class="form-inner">
               <form action="#" class="login">
                  <div class="field">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={loginStyles.input}
        />
        </div>
    <div class="field">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={loginStyles.input}
        />

         </div>
                  <div class="pass-link">
                     <a href="#">Reset password?</a>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     
                     <input type="submit" value="Login"  onClick={handleLogin}/>
                  </div>
                  <div class="signup-link">
                     Don't Have Account? <a href="">Create A New</a>
                  </div>
               </form>
               <form action="#" class="signup">
                  <div class="field">
                     <input type="text" placeholder="Email Address" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Password" required/>
                  </div>
                  <div class="field">
                     <input type="password" placeholder="Confirm Password" required/>
                  </div>
                  <div class="field btn">
                     <div class="btn-layer"></div>
                     <button
          onClick={handleLogin}
          style={loginStyles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = loginStyles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = loginStyles.button.backgroundColor)}
        >
          Login
        </button>
                  </div>
               </form>
            </div>
         </div>
      
      </div>
      <div className='flex justify-center'>
        <img style={loginStyles.girlPic} src={imgop2} alt="Girl Pic" />
      </div>
    </div>
  );
}

export default Login;
