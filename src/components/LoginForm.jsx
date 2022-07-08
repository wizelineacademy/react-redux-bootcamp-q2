import React, { useState, useRef } from 'react';
import LoginApi from '../utils/loginApi'

import { Form, Title, Label, Input, Button } 
  from '../styles/components/Login.styles.js';

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const [customErrorToShow, setCustomErrorToShow] = useState('');

  const handleOnClick = () => {
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    console.log(userNameRef.current.value);
    setCustomErrorToShow('')

    try {
      LoginApi(username, password)
        .then(data => console.log(data))
        .catch(err => setCustomErrorToShow(err.message))
    } catch (error) {
      setCustomErrorToShow('Error connecting with the server');
    }
  }

  return (
    <Form>
      <Title>Welcome to the WizeStore!</Title>
      <Label htmlFor="username">Username</Label>
      <Input type="text" name="username" ref={userNameRef} placeholder='Enter Username'/>
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" ref={passwordRef} placeholder='Enter Password'/>
      <Button type="button" onClick={handleOnClick}>Login</Button>
      <Label>{customErrorToShow}</Label>
    </Form>
  )
}

export default Login;