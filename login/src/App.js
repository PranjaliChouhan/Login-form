
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 

import Login from './Login';
import Signup from './Signup';
import ForgotPassword from'./ForgetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
