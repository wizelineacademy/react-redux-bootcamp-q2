import React, { useEffect, useState } from 'react';
import {
  Wrapper,
  Links,
  FlexContainer,
  Text
} from './Header.styles'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Logo from '../../Images/wizeStoreLogo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectMyCurrentUser } from '../../Redux/slices/usersLogin';
import { useHistory } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = !!useSelector(selectMyCurrentUser);
  const history = useHistory();
  const [open, setOpen] = useState(false);


const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {                                                     
  setOpen(false);
};

const handleOnLogOut = () => {      
  dispatch(logOut());
  history.push("/");                                         
  setOpen(false);
};

  return (
    <Wrapper className="topnav" id="myTopnav">
      <FlexContainer>
     
          <Links to="/">
          <div className='container-logo'>
              <img src={Logo} alt='logo' className='wize-store-logo'/>
              <Text> WizeStore</Text>
              </div>
          </Links>
        {isAuthenticated && (
          <div className='links'>
            <Links to="/cart">CART</Links>
            <Links to="/products">PRODUCTS</Links>
            <Button className='button-logout' onClick={handleClickOpen}>
              Log out
            </Button>
          </div>
        )}
          {!isAuthenticated && (
            <Links to="/login">Login</Links>
          )}   
      </FlexContainer>
      <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you want to exit from your account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Leaving the application, it will not be possible to 
          see your shopping cart or existing products, are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOnLogOut} autoFocus>
            Yes, Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Wrapper>
  );

  
};

