// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserProfile from "./UserProfile";

const AppUseParam = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<UserProfile />} />
    </Routes>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to the home page!</p>
    <Link to="/user/johndoe">Visit John's profile</Link>
  </div>
);

export default AppUseParam;
