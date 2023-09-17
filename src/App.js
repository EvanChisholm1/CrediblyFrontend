import React from 'react';
import Navbar from './Navbar';
import Textbox from './Textbox';
import ReactDOM from 'react-dom/client';
import bread from './images/bread.svg';
import './App.css';
import TextInput from './Input';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <>
        {/* <h1>Credible. Your world, credibly.</h1> */}
        <div className='wrapper'>
          <TextInput />
        </div>
    </>

  )
}

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}>
          </Route>
          <Route path='/submission'></Route>
        </Routes>
        
      </BrowserRouter>


    </div>
  );
}


export default App;
