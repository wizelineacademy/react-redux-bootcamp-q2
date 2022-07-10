import React, { useState} from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer } from '../components/Login/LoginStyles';
import mainLogo from './../img/google_g_logo.png';
import loginApi from './../utils/loginApi';


export const Login = (props) => {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const handelForm = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const  authenticationApi = async (e) => {
    try {
      const response  = await loginApi(e.uname, e.psw);
      localStorage.setItem('user', response.id+'/'+response.username);
      props.setIsAuth(true);
      history.push('/');
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <LoginContainer>
      <h1>Welcome to the WizeStore!</h1>
      <div> 
        <label htmlFor="uname"><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          name="uname" 
          value={formData.name}
          onChange={(e)=>handelForm(e)}
          required 
        />
        <label htmlFor="psw"><b>Password</b></label>
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="psw"
          value={formData.psw} 
          onChange={(e)=>handelForm(e)}
          required
        />
        <button onClick={()=>authenticationApi(formData)}>Login</button>
      </div>
      <hr />
      <button className='icon'>
        <div>
          <img src={mainLogo} alt="Google logo" />
        </div>
        Sign in with Google
      </button>
    </LoginContainer>
  )
}
