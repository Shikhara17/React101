import React from 'react'
import '../App.css';
import { Button } from './Button'
import './Profile.css';

function Profile() {
  return (
    <div className='profile-container'>
      <video src="/videos/video-2.mp4" loop autoPlay muted></video>
    <h1>Welcome</h1>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
    <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' 
        buttonSize='btn--large'>Get Started</Button>
        <Button className='btns' buttonStyle='btn--primary' 
        buttonSize='btn--large'>Lorem ipsum odor amet< i className='far fa-play-circle'/></Button>
    </div>

    </div>
  )
}

export default Profile
