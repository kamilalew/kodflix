import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import getGallery from './getGallery.js';
import { Redirect } from 'react-router-dom';

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
    } Ï

    render() {
        if (this.state.individualMovie) {
            return (
                <div className='details'>
                    <h1 className='detailsName' style={this.state.style}>{this.state.individualMovie.name}</h1>
                    <div className='synopsis_details_wrapper'>
                        <div className='synopsisDetails'>{this.state.individualMovie.synopsis}</div>
                        <img src={this.state.individualMovie.image} className='synopsisImage' alt={this.state.individualMovie.alt} />
                    </div>
                    <Link className='detailsLink' to='/'>Back to homepage</Link>
                </div>
            )
        } else {
            return <Redirect to='/not-found' />
        }
    }
}