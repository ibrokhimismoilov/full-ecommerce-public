import React, { useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../../Routes/routes";
import Footer from "./Footer";
import Header from "./Header";
import Admin from "../../admin";
import { useSelector } from "react-redux";
import ProductViewModal from "../ProductViewModal";
import { ProductModalContext } from "../../context/productModalContext";

function Layout() {
  const { contextProductValue } = useContext(ProductModalContext);
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser?.role === "admin") {
    return (
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div>
            <div className="container">
              <Header {...props} />
              <div className="main">
                <Routes />
              </div>
            </div>
            <Footer />
            {contextProductValue !== null ? <ProductViewModal /> : null}
          </div>
        )}
      />
    </BrowserRouter>
  );
}

export default Layout;
