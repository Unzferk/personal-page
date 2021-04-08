import React from 'react';
import CardsItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h2 className='hx'>Check Out to my Public Proyects!</h2>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardsItem 
                            src='images/img-bot.jpg'
                            text='ChatBot App, You can ask to this Bot about enginer careers'
                            label='ChatBot'
                            path='https://github.com/Unzferk/'
                        />
                        
                        <CardsItem 
                            src='images/img-10.jpg'
                            text='Android App, you can CRUD orders'
                            label='Restaurant'
                            path='https://github.com/Unzferk/Rest'
                        />
                        <CardsItem 
                            src='images/library.jpeg'
                            text='Another proyects without javascript '
                            label='More'
                            path='https://github.com/Unzferk'
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;