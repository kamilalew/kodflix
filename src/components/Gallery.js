import React from 'react';
import '../App.css';
import eat_pray_love from '../images/eat_pray_love.jpeg';
import frida from '../images/frida.jpg';
import grown_ups from '../images/grown_ups.jpeg';
import perfect_strangers from '../images/perfect_strangers.jpeg';
import twice_born from '../images/twice_born.jpeg';
import zohan from '../images/zohan.jpeg';
import Movies from './Movies.js';

export default function Gallery() {
    return (
        <div>
            <div className='container'>
                <Movies id='twice_born' name='Twice Born' image={twice_born} alt='Twice Born Movie Cover' />
                <Movies id='perfect_strangers' name='Perfect Strangers' image={perfect_strangers} alt='Perfect Strangers Movie Cover' />
                <Movies id='frida' name='Frida' image={frida} alt='Frida Movie Cover' />
            </div>
            <div className='container'>
                <Movies id='eat_pray_love' name='Eat Pray Love' image={eat_pray_love} alt='Eat Pray Love Movie Cover' />
                <Movies id='grown_ups' name='Grown Ups' image={grown_ups} alt='Grown Ups Movie Cover' />
                <Movies id='zohan' name='Zohan' image={zohan} alt='Zohan Movie Cover' />
            </div>
        </div>
    )
}