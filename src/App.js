import React from 'react';
import './App.css';
import eat_pray_love from './images/eat_pray_love.jpeg';  
import frida from './images/frida.jpg'; 
import grown_ups from './images/grown_ups.jpeg'; 
import perfect_strangers from './images/perfect_strangers.jpeg'; 
import twice_born from './images/twice_born.jpeg'; 
import zohan from './images/zohan.jpeg'; 

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='image'>
            <img src={eat_pray_love} alt='Eat Pray Love movie cover'/>
          </div>
          <div className='image'>
            <img src={frida} alt='Frida movie cover'/>
          </div>
          <div className='image'>
            <img src={grown_ups} alt='Grown Ups movie cover'/>
          </div>
        </div>
        <div className='container'>
          <div className='image'>
            <img src={perfect_strangers} alt='Perfect Strangers movie cover'/>
          </div>
          <div className='image'>
            <img src={twice_born} alt='Twice Born movie cover'/>
          </div>
          <div className='image'>
            <img src={zohan} alt='Zohan movie cover'/>
          </div>
        </div>
    </div>
  );
}

export default App;
