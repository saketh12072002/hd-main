import React from 'react'
import men from '../../assets/men.jpg'
import women from '../../assets/women.jpg'
import './styles.scss'
function Directory() {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item"
                style={{backgroundImage:`url(${men})`}}
                >
                    <a href="/">Shop men</a>
                </div>

                <div className="item"
                style={{backgroundImage:`url(${women})`}}
                >
                    <a href="/">Shop women</a>
                </div>
            </div>
        </div>
    )
}

export default Directory
