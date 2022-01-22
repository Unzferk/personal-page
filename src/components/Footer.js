import React from 'react'
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {ImMail4} from 'react-icons/im'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='presentation'>
                <img src='/images/me.jpg' alt="self" className='profile' />
                <div className='data'>
                    <h3>Unzueta Fernando</h3>
                    <p>fernando.unzueta.dev@gmail.com </p>
                    <p>+591 68518885</p>
                    <div className='social'>
                    <a href='https://www.facebook.com/Unzferk/' target='_blank' rel="noreferrer">
                    <FaFacebook className='social-icon'/>
                    </a>
                    <Link to='/contact'>
                        <ImMail4 className='social-icon'/>
                    </Link>
                    </div>
                </div>
            </section>

           
            
        </div>
    )
}

export default Footer
