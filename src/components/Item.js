import React from 'react'


function Item(props) {
    return (
        <>
          <li className='item'>
            <div className='item__link'>
                <figure className='item__pic-wrap' >
                    <img src={props.src} alt="Travel" className='item__img' />
                </figure>
                <div className='item__info'>
                    <h5 className='item__text'>{props.text}</h5>    
                </div>  
            </div>
            
          </li>  
        </>
    )
}

export default Item
