import React from 'react' ;
import { Feature } from '../../components';
import './whatgpt3.css' ;

const Whatgpt3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The posssibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default Whatgpt3
