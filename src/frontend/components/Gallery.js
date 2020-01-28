import React from 'react';
import Movies from './Movies.js';
import getGallery from './getGallery.js';
import movie_icon from '../images/movie_icon.png';
// import { render } from '@testing-library/react';

export default class Gallery extends React.Component {

    constructor() {
        super();
        this.state = { movie: {}}
    }

    componentDidMount() {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(data => {
                this.setState({ movie: data })
                console.log('the backend returned:', data)
            })
    }


    render() {
        
        return (
            <div>
                <div className='background'>
                    <img src={movie_icon} className='movie_icon' alt='movie_icon'></img>
                    <div className='main_title'>PEDRO ALMODOVAR</div>
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
}


