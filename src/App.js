import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Gallery from './components/Gallery';
import Details from './components/Details'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Gallery} />
      <Route exact path='/details' component={Details} />
    </BrowserRouter>
  );
}

export default App;
