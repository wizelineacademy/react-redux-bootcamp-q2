import React, { useState } from 'react';
import {
  Alert,
  Button,
  Grid,
  InputAdornment,
  Snackbar,
  TextField,
  Typography
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { AccountCircle, LockRounded } from '@mui/icons-material';
import { Paper } from './../styles/pages/Login.styles';
import { getUser, selectUser } from './../redux/slices/User';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../redux/store';

interface I_Form {
  Username: string;
  Password: string;
}

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const user = useSelector(selectUser);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<I_Form>();
  const onSubmit = async (data: I_Form) => {
    await dispatch(
      getUser({
        username: data.Username,
        password: data.Password
      })
    );
  };

  return (
    <>
      <br />
      <br />
      <Grid container justifyContent='center'>
        <Grid item xs={8} md={6}>
          <Paper variant='elevation'>
            {!user?.data ? (
              <>
                <Typography component='h1' textAlign='center'>
                  Welcome to the WizeStore
                </Typography>
                <br />
                <br />
                {user?.error && (
                  <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={true}
                    autoHideDuration={6000}
                  >
                    <Alert severity='error'>{user?.error}</Alert>
                  </Snackbar>
                )}
                {Object.keys(errors).length > 0 && (
                  <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={true}
                    autoHideDuration={6000}
                  >
                    <Alert severity='warning' sx={{ width: '100%' }}>
                      {errors?.Username?.message || errors?.Password?.message}
                    </Alert>
                  </Snackbar>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label='Username'
                    variant='standard'
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <AccountCircle />
                        </InputAdornment>
                      )
                    }}
                    {...register('Username', {
                      required: {
                        value: true,
                        message: 'The username field is required'
                      }
                    })}
                  />
                  <br />
                  <br />
                  <TextField
                    label='Password'
                    type='password'
                    variant='standard'
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LockRounded />
                        </InputAdornment>
                      )
                    }}
                    {...register('Password', {
                      required: {
                        value: true,
                        message: 'The password field is required'
                      }
                    })}
                  />
                  <br />
                  <br />
                  <br />
                  <Button type='submit' fullWidth variant='contained'>
                    Login
                  </Button>
                </form>
              </>
            ) : (
              <Typography component='h1'>Welcome Wizeline!</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
