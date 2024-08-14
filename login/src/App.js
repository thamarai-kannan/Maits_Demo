import React from 'react';
import Login from './components/login/login';
import HomePage from './components/login/home';
import Register from './components/register/register';
import Successful from './components/register/successful';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/successful" element={<Successful />} />

       
      </Routes>
      </BrowserRouter>
  );
}

export default App;
