import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery.js';
import Details from './Details.js';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Gallery} />
      <Route exact path='/details' component={Details} />
    </BrowserRouter>
  );
}

export default App;
