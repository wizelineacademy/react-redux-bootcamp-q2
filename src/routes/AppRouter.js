import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Products} from '../pages/Products';
import {Cart} from '../pages/Cart';
import {Home} from '../pages/Home';
import {AuthRoute } from './AuthRoute'
import {Header} from '../components/Header';
import { Login } from '../pages/Login';
import Logout from '../components/Logout';

export const AppRouter = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Router>
      <Header auth={isAuth} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <AuthRoute path='/products'>
          <Products/>
        </AuthRoute>
        <AuthRoute path='/cart'>
          <Cart />
        </AuthRoute>
        <AuthRoute path='/logout'>
          <Logout setIsAuth={setIsAuth} />
        </AuthRoute>
        <Route path='/login'>
          <Login setIsAuth={setIsAuth} />
        </Route>
      </Switch>
    </Router>
  );
};
