import React from 'react'
import img from '../img/01.JPG';

const Home = () => {
  return (
    <div className='wrap home'>
        <h1>Contact<br/>Application</h1>
        <div>
        <img src={img} alt="고양이"/>
        </div>
    </div>
  )
}

export default Home