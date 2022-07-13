import React from 'react';
import { Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Main } from '../styles/pages/Home.styles';

export const Home = () => {
  return (
    <Main>
      <Typography component='h1' color='AppWorkspace'>
        Welcome to WizeStore!
      </Typography>

      <Typography color='AppWorkspace'>
        Browse our{' '}
        <Link component={RouterLink} underline='none' to='/products'>
          <Typography component='span' color='yellow'>
            products
          </Typography>
        </Link>
      </Typography>
    </Main>
  );
};
