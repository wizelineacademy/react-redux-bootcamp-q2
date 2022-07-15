import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Products } from '../pages/Products';
import { Cart } from '../pages/Cart';
import { Home } from '../pages/Home';
import { Header } from '../components/Header';
import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import RequiredAuth from '../components/RequiredAuth';
import AuthProvider from '../components/AuthProvider';

export const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <RequiredAuth>
                <Home />
              </RequiredAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequiredAuth>
                <Products />
              </RequiredAuth>
            }
          />
          <Route
            path="/cart"
            element={
              <RequiredAuth>
                <Cart />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/logout"
            element={
              <RequiredAuth>
                <Logout />
              </RequiredAuth>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
