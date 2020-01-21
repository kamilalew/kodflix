import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

export default function NotFound(props) {
    return (
        <div className='not_found_message'>
            <div className='not_found'>This title cannot be found.</div>
            <div className='not_found'>Are you sure Almodovar actually direct such movie ??!</div>
            <Link className='detailsLink' to='/'>Back to homepage</Link>
        </div>
    )
}