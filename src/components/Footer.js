import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Contact Me
        </p>
        <p className='footer-subscription-text'>
          Lorem Ipsum.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/contact-me'>Contact me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>Lorem</Link>
          
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact-me'>Contact me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/'>Lorem</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
         
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>LinkedIn</Link>
            <Link to='/'>Github</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Shikhara Pagadala
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>SP © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='Linkedin'
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              class='social-icon-link github'
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;