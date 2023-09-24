import React from 'react';
import logo from './logo.svg';
import Page from './components/Page';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News';

function App() {
  return (
    <div className='app'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Page/>} />
    <Route path="/News/:slug" element={<News/>} />
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
