import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components/Gallery.css';
import './App.css';
import Gallery from './components/Gallery.js';
import Details from './components/Details.js';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Gallery} />
      <Route exact path='/:details' component={Details} />
    </BrowserRouter>
  );
}

export default App;
