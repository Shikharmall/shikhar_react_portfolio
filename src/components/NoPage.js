import React from 'react';
import '../css/nopage.css';
import Error from '../img/error.png';

export default function NoPage() {
  return (
    <div className='nopage'>
      <div className='sub_nopage'>
        <img src={Error} alt='error'/>
        <h1> 404 ERROR </h1>
        <h1>Page not found.</h1>
      </div>
    </div>
  )
}
