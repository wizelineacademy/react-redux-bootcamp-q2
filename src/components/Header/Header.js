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

export const Header = () => {
const [isAuthenticated, setIsAutenticated] = useState(false);
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {                                                     
  setOpen(false);
};

useEffect( () => {
  setIsAutenticated (localStorage.getItem('username'));
}, [isAuthenticated]);

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
            {!isAuthenticated && (
              <Links to="/login">Login</Links>
            )}   
            <Button className='button-logout' onClick={handleClickOpen}>
              Log out
            </Button>
          </div>
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
          <Button onClick={handleClose} autoFocus>
            Yes, Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Wrapper>
  );

  
};

