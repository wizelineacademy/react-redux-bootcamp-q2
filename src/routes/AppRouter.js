import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Products} from '../pages/Products';
import {Cart} from '../pages/Cart';
import {Home} from '../pages/Home';
import {Header} from '../components/Header';
import { Login } from '../pages/Login';
import { UserContext } from '../components/UserData'

export const AppRouter = () => {
  const { activeUser } = useContext(UserContext);
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          { activeUser ? <Products /> : <Redirect to="/login"/> }
        </Route>
        <Route path='/cart'>
          { activeUser ? <Cart /> : <Redirect to="/login"/> }
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
