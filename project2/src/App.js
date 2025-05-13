import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
//local files
import Home from './home';
import Contact from './contact';
import Navbars from './navbars';

function App() {
  return (
    <>
      <h1>Comic Book Store</h1>
      <h2>Welcome to my comic book store, where you can find lots of comic books</h2>
      <BrowserRouter>
        <Navbars/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
