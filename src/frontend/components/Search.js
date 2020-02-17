import React from 'react';
import getGallery from './getGallery.js';

export default class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchValue: '',
            getMovieNames: []
        }
    }

    searchMovie(placeholder) {    
        let getMovieNames = getGallery()
        .filter(movie => movie.name.toLowerCase().includes(placeholder.toLowerCase()))
        .map(movie => movie.name);
        this.setState({ getMovieNames: getMovieNames })  
    }

    thisHandle(event) {
        this.setState({ searchValue: event })
    }

    render() {
        return (
            <div>
                <input type='text' placeholder='type here' onChange={(event) => this.thisHandle(event.target.value)}></input>
                <button onClick={() => this.searchMovie(this.state.searchValue)}>Press me</button>
                <select>{this.state.getMovieNames.map(name => <option>{name}</option>)}</select>
            </div>
        )
    }
}