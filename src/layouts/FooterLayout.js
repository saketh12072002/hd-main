import React from 'react'
import Header from '../components/Header/Header'
import {Link} from "react-router-dom"
import Sidefooter from '../components/Footer/Sidefooter/Sidefooter'
import Footer from "./../components/Footer/Footer"

function FooterLayout(props) {
    return (
        <div className="footerlayout">

            <div className="footerheader">
                <Header {...props}/>
            </div>
            <div className="footercontent">
                    <div className="sidefooter">
                       <Sidefooter {...props}/>
                    </div>
                    <div className="sidefootersections">
                 
                        {props.children}
                    </div>
            </div>

        <Footer />
            
        </div>
    )
}

export default FooterLayout
