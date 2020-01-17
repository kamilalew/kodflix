import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css'

export default class Details extends React.Component {
    constructor(props) {
        super(props)


        this.state =
        {
            message: 'Hello, this will be the details page for each Movie & TV show :)',
        }
    }


    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                message: 'Coming soon! :)',
                style: {
                    color: 'white',
                    fontSize: '40px',
                }
            });
        }, 3000);
    }

    render() {

        return (
            <Link to='/'>
                <h1 style={this.state.style}>{this.state.message}</h1>
            </Link>
        );
    }
} 