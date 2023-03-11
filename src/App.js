import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/layout";
import LayoutBack from "./components/layout/LayoutBack";

import Settings from "./pages/front/user/Settings";
import axios from "axios";
import Users from "./pages/back/users/Users";
import Home from "./pages/front/home/Home";
import Login from "./pages/commun/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/messages";


axios.defaults.baseURL = "http://localhost:5000";

const Register = React.lazy(() => import("./pages/commun/auth/Register"));

const TemplateBack = React.lazy(() => import("./components/back/TemplateBack"));

function App() {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  let location = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          exact
          path='*'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          exact
          path='/register'
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          exact
          path='/admin'
          element={
            <Layout>
              <TemplateBack />
            </Layout>
          }
        />
        <Route
          exact
          path='/settings'
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
                <Route
          exact
          path='/'
          element={
         
              <Login />
    
          }
        />
        <Route
          exact
          path='/dashboard/users'
          element={
            <LayoutBack>
              <Users />
            </LayoutBack>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
