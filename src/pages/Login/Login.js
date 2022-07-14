import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import loginApi from '../../utils/loginApi';
import { setUser } from './LoginSlice';
import {
  InputWrapper,
  LoginContainer,
  Input,
  LoginButton,
} from './Login.styles';

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatchUserInfo = () => {
    loginApi(username, password)
      .then(() => {
        dispatch(setUser({username, password}));
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <LoginContainer>

      <h1>Welcome to the WizeStore!</h1>

      <InputWrapper>

        <label htmlFor='username'>
          <b>Username</b>
        </label>
        <Input
          type='text'
          placeholder='Enter Username'
          name='username'
          required
          onChange={(input) => setUsername(input.target.value)}
        />

        <label htmlFor='password'>
          <b>Password</b>
        </label>
        <Input
          type='password'
          placeholder='Enter Password'
          name='password'
          required
          onChange={(input) => setPassword(input.target.value)}
        />

        <LoginButton onClick={() => dispatchUserInfo()}>Login</LoginButton>

      </InputWrapper>

    </LoginContainer>
  );
};
