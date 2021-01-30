import React from 'react'
import './styles.scss'
import logo from '../../assets/logo.png'
function Header() {
    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={logo} alt="logohd"/>
                </div>
            </div>
        </div>
    )
}

export default Header
