import React from 'react';
import Movies from './Movies.js';
import getGallery from './getGallery.js';
import movie_icon from '../images/movie_icon.png';

export default function Gallery() {
    return (
        <div>
            <div class='background'>
                <div className='main_title'>PEDRO ALMODOVAR
            </div>
                <img src={movie_icon} className='movie_icon' alt='movie_icon'></img>
            </div>
            <div className='container'>
                {
                    getGallery().map(movie => (
                        <Movies
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            image={movie.image}
                            alt={movie.alt} />
                    ))
                }
            </div>
        </div>
    )
}


