import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import RequiredAuthRoute from '../components/RequiredAuthRoute';
import AuthProvider from '../components/AuthProvider';

export const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <RequiredAuthRoute exact path="/">
            <Home />
          </RequiredAuthRoute>
          <RequiredAuthRoute path="/products">
            <Products />
          </RequiredAuthRoute>
          <RequiredAuthRoute path="/cart">
            <Cart />
          </RequiredAuthRoute>
          <Route path="/login">
            <Login />
          </Route>
          <RequiredAuthRoute path="/logout">
            <Logout />
          </RequiredAuthRoute>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
