import React from 'react';
import './App.css';
import eat_pray_love from './images/eat_pray_love.jpeg';  
import frida from './images/frida.jpg'; 
import grown_ups from './images/grown_ups.jpeg'; 
import perfect_strangers from './images/perfect_strangers.jpeg'; 
import twice_born from './images/twice_born.jpeg'; 
import zohan from './images/zohan.jpeg'; 
import Movies from './titles.js';


function App() {
  return (
    <div className="App">
        <div className='container'>
          <Movies name='Twice Born' image={twice_born} alt='Twice Born Movie Cover'/>
          <Movies name='Perfect Strangers' image={perfect_strangers} alt='Perfect Strangers Movie Cover'/>
          <Movies name='Frida' image={frida} alt='Frida Movie Cover'/>
        </div>
        <div className='container'>
          <Movies name='Eat Pray Love' image={eat_pray_love} alt='Eat Pray Love Movie Cover'/>
          <Movies name='Grown Ups' image={grown_ups} alt='Grown Ups Movie Cover'/>
          <Movies name='Zohan' image={zohan} alt='Zohan Movie Cover'/>
        </div>
    </div>
  );
}

export default App;
