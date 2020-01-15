import React from 'react';
import Movies from './Movies.js';
import getGallery from './getGallery.js';

export default function Gallery() {
    return (
        <div>
            <div className='container'>
                {
                    getGallery().map(movie => (
                       <Movies 
                       key={movie.id}
                       id={movie.id} 
                       name={movie.name} 
                       image={movie.image} 
                       alt={movie.alt}/>
                    ))
                }
            </div>
        </div>
    )
}


