import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import getGallery from './getGallery.js';

export default class Details extends React.Component {
    constructor(props) {
        super(props)


        this.state =
        {
            individualMovie: {}
        }
    }


    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        let individualMovie = getGallery()
            .find(individualMovie => individualMovie.id === movieId);

        this.setState({
            individualMovie: individualMovie
        });
    }

    render() {

        return (
            <div className = 'details'>
                <h1 className = 'detailsName' style={this.state.style}>{this.state.individualMovie.name}</h1>
                <Link className = 'detailsLink' to='/'>Back to homepage</Link>
            </div>
        );
    }
} 