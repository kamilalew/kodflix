import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';
import { Redirect } from 'react-router-dom';

export default class Details extends React.Component {
    constructor(props) {
        super(props)


        this.state =
        {
            individualMovie:  {}
        };
    }

    render() {
        if (this.state.individualMovie) {
            let individualMovie = this.props.location.state.find(movie =>  movie.id === this.props.match.params.movieId); 
            return (
                    <div className='details'>
                        <h1 className='detailsName' style={this.props.style}>{individualMovie.name}</h1>
                        <div className='synopsis_details_wrapper'>
                            <div className='synopsisDetails'>{individualMovie.synopsis}</div>
                            <img src={require(`../images/${individualMovie.image}.jpg`)} className='synopsisImage' alt={individualMovie.alt} />
                        </div>
                        <Link className='detailsLink' to='/'>Back to homepage</Link>
                    </div>
            )
        } else {
            return <Redirect to='/not-found' />
        }
    }
}