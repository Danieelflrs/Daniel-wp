import React from 'react';


function Icon(props){
    return (
            <div className='b-icon-container'>
                <img 
                    className = 'icon-image'
                    src ={require(`../images/${props.language}-icon.png`)}
                    alt='logo'
                />
                <div className='b-icon-tittle'>{props.tittle}</div>
            </div>
    )
};

export default Icon;