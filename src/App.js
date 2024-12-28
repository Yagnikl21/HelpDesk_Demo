import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout";
import routes from "./Routes/routesConfig";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPassword from "./Pages/ForgetPassword";

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/Login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgot-password" element={<ForgetPassword />} />

        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <Layout>
                <Routes>
                  {routes.map((route) => {
                    const Component = require(`./Pages/${route.component}`).default;
                    return (
                      <Route
                        key={route.path}
                        path={route.path}
                        element={<Component />}
                      />
                    );
                  })}
                  <Route path="*" element={<Navigate to="/Dashboard" />} />
                </Routes>
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
};

export default App;
