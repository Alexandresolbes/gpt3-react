import React from 'react' ;
import './header.css' ;
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
      <h1 className='gradient__text'>
        Let's Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eius voluptas voluptates illum deleniti, rerum amet quam, delectus vero voluptatum sequi! Suscipit veritatis ipsum maiores aliquam repellat fuga asperiores qui.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quod aliquam rerum eos earum, laboriosam dicta adipisci assumenda saepe voluptatibus provident et enim sit quisquam ex delectus pariatur odit qui.
      </p>
      <div className='gpt3__header-content__input'>
        <input type="email" placeholder="Your email address"/>
        <button type="button"> Get started</button>
      </div>
      <div className='gpt3__header-content__people'>
        <img src={people} alt="people" />
        <p> 1,600 people requested access within 24 hours</p>
      </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
