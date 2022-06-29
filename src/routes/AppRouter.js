import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "../components/Header";

import { Products } from "../pages/Products";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Switch>
    </Router>
  );
};
