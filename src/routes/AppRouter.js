import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products } from '../pages/Products/Products';
import { Cart } from '../pages/Cart/Cart';
import { Login } from '../pages/Login/Login';
import { Header } from '../components/Header';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.login.isLogged)

  console.log(isLoggedIn);

  return (
    <Router>
      <Header />
      <Switch>
        { isLoggedIn
          ?
          <>
            <Redirect to='/products'/>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </>
          :
          <>
            <Redirect to='/login'/>
            <Route path='/login'>
              <Login />
            </Route>
          </>
        }


      </Switch>
    </Router>
  );
};
