import React from 'react';
import img from '../images/Illustration.png';
import './Hero.scss';

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className='hero-content'>
            <p>We are now allowing early-access for users. <a href='#'>Learn More</a></p>
            <h2>Build a highly engaged community with no effort.</h2>
            <span>commune offers tool to build a highly engaged community with no effort. simply setup your commune and manage every thing from members to content one from central dashboard</span>
            <div className='input-container'>
                <input placeholder='Enter your email address' type='email'/>
                <button >Join Waitlist</button>
            </div>
        </div>
        <div className='hero-img'>
            <img src={img} alt=''/>

        </div>

    </div>
  )
}
