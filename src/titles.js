import React from 'react';

function Movies(props) {
    return (
      <div className='image'>
              <img src={props.image} alt={props.alt}/>
              <div className='title'>
                <h1>{props.name}</h1>
              </div>
            </div>
    )
  }

  export default Movies;