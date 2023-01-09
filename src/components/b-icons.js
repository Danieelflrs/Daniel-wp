import React from 'react';


function Icon(props){
    return (
            <div className='b-icon-container'>
                <a></a>
                <img 
                    className = 'icon-image'
                    src ={require(`../images/${props.language}-icon.png`)}
                    alt='logo'
                />
                <div className='b-icon-tittle'>{props.language}</div>
            </div>
    )
};

export default Icon;   