import React from 'react';
import Item from './Item';
import './Item.css';


function Items() {
    return (
        <>
        <video src='/videos/video-5.mp4' autoPlay loop muted/>
        <div className='contain'>
             <h1>Knowledge in All of this Technologies!!</h1>
        <div className='items'> 
        
            <div className='items__container'>
                        <Item 
                            src='images/knowledge/css.svg'
                            text='CSS'
                        />
                        <Item 
                            src='images/knowledge/firebase.svg'
                            text='Firebase'
                        />
                        <Item 
                            src='images/knowledge/git.svg'
                            text='Git'
                        />
                        <Item 
                            src='images/knowledge/html.svg'
                            text='HTML'
                        />
                        <Item 
                            src='images/knowledge/js.svg'
                            text='JavaScript'
                        />
                        <Item 
                            src='images/knowledge/mongo.svg'
                            text='MongoDB'
                        />
                        <Item 
                            src='images/knowledge/node.svg'
                            text='NodeJS'
                        />
                        <Item 
                            src='images/knowledge/npm.svg'
                            text='npm'
                        />
                        <Item 
                            src='images/knowledge/react.svg'
                            text='React'
                        />
                        <Item 
                            src='images/knowledge/sublime.svg'
                            text='Sublime'
                        />
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Items
