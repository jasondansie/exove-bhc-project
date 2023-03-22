import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './app/Home';
import Info from './app/Info';
import Logout from './app/Logout';
import MyProfile from './app/MyProfile';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/myprofile' element={<MyProfile />}> </Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
