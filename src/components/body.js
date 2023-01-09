import React from 'react';
import '../style-sheets/body.css';
import Icon from './b-icons.js';

function Body(props){
    return(
        <div className='content'>
            <div className='b-icon-grid'>
                <Icon
                    language='javascript'
                />
                <Icon
                    language='css'
                />
                <Icon
                    language='html'
                />
                <Icon
                    language='react'
                />
            </div>
        </div>
    )
};

export default Body