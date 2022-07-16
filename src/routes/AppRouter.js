import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Products } from '../pages/Products/Products';
import { Cart } from '../pages/Cart/Cart';
import { Home } from '../pages/Home';
import {Header} from '../components/Header/Header';
import { Login } from '../pages/Login/Login';
import {Wrapper} from './AppRouter.styles';
import cart from '../utils/MockData/cartmock.json'
import PrivateRoute from '../components/Auth/PrivateRute';

export const AppRouter = () => {
  return (
    <Router>
      <Wrapper>
        <div>
          <Header />
        </div>
        <div className='containers'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute path='/products' >
              <Products />
            </PrivateRoute>
            <PrivateRoute path='/cart' >
              <Cart items ={cart}/>
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </Wrapper>
    </Router>
  );
};
