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
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};
