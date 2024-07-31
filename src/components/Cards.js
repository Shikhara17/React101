import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='cards'>
        <h1> Check out my projects</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <Card src="images/img-9.jpg" 
                    text='Explore my Projects' 
                    label='Project' path='/services'/>
                    <Card src="images/img-2.jpg" 
                    text='Lorem Ipsum' 
                    label='Lorem' path='/services'/>
                
                </ul>
                <ul className='cards__items'>
                    <Card src="images/img-1.jpg" 
                    text='Explore my Projects' 
                    label='Project' path='/projects'/>
                    <Card src="images/img-3.jpg" 
                    text='Contact me' 
                    label='Lorem' path='/contact-me'/>
                    <Card src="images/img-5.jpg" 
                    text='Contact Ipsum' 
                    label='Lorem' path='/contact-me'/>
                </ul>

            </div>

        </div>
      
    </div>
  )
}

export default Cards
