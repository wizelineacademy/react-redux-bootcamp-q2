import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { blue, purple } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import loginApi from "../../utils/loginApi";
import Container from '@mui/material/Container';
import {Wrapper} from './Login.styles'
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://www.wizeline.com/">
        WizeStore
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  width:'100%',
  color: theme.palette.getContrastText(purple[400]),
  backgroundColor: '#764AF1',
  '&:hover': {
    backgroundColor: blue[800],
  },
}));


export const Login = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  async function handleSubmit (){
    try {
      const response = await loginApi(userName, password);
      localStorage.setItem("username", userName);
      history.push("/products");
      setError(null);

    } catch (error) {
      return setError(error);
    }
  };

  return (
    <Wrapper>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className='paper'>
        <div className='conatiner-avatar'>
          <Avatar className='avatar'>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </div>
        <form className='form' noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            onChange={(e) => setUserName(e.target.value)}
            label="User Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            id="password"
          />
          <ColorButton onClick={() => handleSubmit()} variant="contained">Log In</ColorButton>
          <Grid container mt={2}>
            <Grid item xs>
              <Link color="inherit" href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link color="inherit" href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && (
            <p className='error-text'>{'Please verify you credentials, Username or password are invalid.'}</p>
          )} 
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    </Wrapper>
  );
};
