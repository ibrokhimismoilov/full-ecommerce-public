import React from "react";
import { Route, Switch } from "react-router";
import Customers from "../pages/Customers";
// import DeleteCustomers from "../pages/Customers/DeleteCustomers";
import EditCustomers from "../pages/Customers/EditCustomers";
import Dashboard from "../pages/Dashboard";
import DeleteOrder from "../pages/Orders/DeleteOrder";
import Orders from "../pages/Orders/index";
import ViewOrder from "../pages/Orders/ViewOrder";
import Products from "../pages/Products";
import AddProduct from "../pages/Products/AddProduct";
import DeleteProduct from "../pages/Products/DeleteProduct";
import EditProduct from "../pages/Products/EditProduct";
import ViewProduct from "../pages/Products/ViewProduct";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/customers/edit/:id" component={EditCustomers} />
      {/* <Route exact path="/customers/delete/:id" component={DeleteCustomers} /> */}
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/add" component={AddProduct} />
      <Route exact path="/products/view/:id" component={ViewProduct} />
      <Route exact path="/products/edit/:id" component={EditProduct} />
      <Route exact path="/products/delete/:id" component={DeleteProduct} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/orders/view/:id" component={ViewOrder} />
      <Route exact path="/orders/delete/:id" component={DeleteOrder} />
    </Switch>
  );
};

export default Routes;
