import "./assets/scss/main.scss";
import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setAdminActionColor,
  setAdminActionMode,
} from "../store/actions/adminThemeActions";
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import Routes from "./Routes";

const Admin = () => {
  const { mode, color } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = mode;
    const colorClass = color;
    dispatch(setAdminActionMode(themeClass));
    dispatch(setAdminActionColor(colorClass));
  }, [dispatch]);

  const history = useHistory();

  useEffect(() => {
    history.replace("/");
  }, []);

  return (
    <div className="admin">
      <Route
        render={(props) => {
          return (
            <div className={`layout ${mode} ${color}`}>
              <Sidebar {...props} />
              <div className="layout__content">
                <div className="layout__content-main">
                  <TopNav />
                  <Routes />
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Admin;
