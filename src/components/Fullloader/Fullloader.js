import React from 'react'
import buffering from './../../assets/buffering.gif'
import './styles.scss'

function Fullloader() {
    return (
        <div className="fullloader">
            <div className="loader">
                <img src={buffering} />   
            </div>    
        </div>
    )
}

export default Fullloader
