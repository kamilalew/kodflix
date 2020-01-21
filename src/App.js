import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components/Gallery.css';
import './App.css';
import Gallery from './components/Gallery.js';
import Details from './components/Details.js';
import movie_icon from '../src/images/movie_icon.png';

function App() {
  return (
    <div>
      <div class='background'>
        <div className='main_title'>PEDRO ALMODOVAR</div>
        <img src={movie_icon} className='movie_icon' alt='movie_icon'></img>
      </div>
        <BrowserRouter>
          <Route exact path='/' component={Gallery} />
          <Route exact path='/:movieId' component={Details} />
        </BrowserRouter>
      </div>
      );
    }
    
    export default App;
