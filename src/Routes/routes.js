// import React, { lazy, Suspense } from "react";
import React from "react";
import "../assets/styles/main.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Product from "../pages/Product";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Contact from "../pages/Contact";

const Routes = () => {
  const { loggedIn } = useSelector((state) => state.user);
  if (loggedIn) {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog/:id" component={Product} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog/:id" component={Product} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route path="/" component={SignIn} />
      </Switch>
    );
  }
};

export default Routes;
