import React from 'react';
import '../App.css'
import {Button} from './Button'
import './HeroSection.css';



function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-0.mp4' autoPlay loop muted/>
            <h1>Unzueta Fernando</h1>
            <p>Junior JavaScript Developer</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    CONTACT ME
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
