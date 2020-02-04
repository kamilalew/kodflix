import React from 'react';
import { Link } from 'react-router-dom';

export default function Movies(props) {
  return (
    <Link to={props.id} className='image'>
      <img src={require(`../images/${props.image}.jpg`)} alt={props.alt} />
      <div className='title'>
        <h1 className='movieName'>{props.name}</h1>
      </div>
    </Link>
  )
}