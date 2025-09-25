import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import Login from "./pages/Auth/Login";
import Home from "./pages/DashBoard/Home"
import SignUp from "./pages/Auth/SignUp";
import Income from "./pages/DashBoard/Income"
import Expense from "./pages/DashBoard/Expense"
import UserProvider from './context/userContext';
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <UserProvider> 
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expense />} />


        </Routes>


      </Router>
    </div>
    
      <Toaster
        toastOptions={{
          className: "",
          style: { fontSize: "13px" }
        }}
      />
    </UserProvider>
  )
}

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};
