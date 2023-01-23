import React from 'react';
import '../style-sheets/body.css';
import Icon from './b-icons.js';

function Body(props){
    return(
        <div className='content'>
            <br/>
            <div className='b-icon-t-container'>
                <p className='b-icon-title'>Programming skills</p>                   
            </div>
            <div className='b-icon-grid'>
                <Icon
                    language='javascript'
                    tittle='javascript'
                />
                <Icon
                    language='css'
                    tittle='css'
                />
                <Icon
                    language='html'
                    tittle='html'
                />
                <Icon
                    language='react'
                    tittle='react'
                />
                 <Icon
                    language='git'
                    tittle='git'
                />
                 <Icon
                    language='github'
                    tittle='github'
                />
                <Icon
                    language='linkedin'
                    tittle='linkedin'
                />
            </div>
            <br/>
            <div className='b-icon-t-container'>
                <p className='b-icon-title'>Soft skills</p>  
            </div>
            
            <div className='b-icon-grid'>
                <Icon
                    language='usaflag'
                    tittle='80% English Lvl.'
                />
                <Icon
                    language='team-work'
                    tittle='Team Work'
                />
                <Icon
                    language='obt'
                    tittle='Out box Thinking'
                />
                <Icon
                    language='communication'
                    tittle='communicative'
                />
                <Icon
                    language='self-taught'
                    tittle='self taught'
                />
                <Icon
                    language='hard-work'
                    tittle='hard worker'
                />
                <Icon
                    language='listen'
                    tittle='listen suggestions'
                />
                <Icon
                    language='time'
                    tittle='time management'
                />
            </div>
            <br/>
        </div>
    )
};

export default Body