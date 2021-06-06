import React from 'react'
import './styles.scss'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    return (
        <footer className="footer">

            <div className="info">

            <div className="customercare">
                <h4>customercare</h4>
                    <p>ContactUs</p>
                    <p>Shipping</p>
                    <p>Exchange and returns</p>
                    <p>Follow your Orders</p>
                    <p>Exchange and returns</p>
                    <p>Follow your Orders</p>
            </div>
            <div className="company">
            <h4>The company</h4>
            <p>ContactUs</p>
                    <p>Shipping</p>
                    <p>Exchange and returns</p>
                    <p>Follow your Orders</p>
            </div>
            <div className="Legal">
            <h4>LegalArea</h4>
            <p>ContactUs</p>
                
                    <p>Exchange and returns</p>
                    <p>Follow your Orders</p>
            </div>
            <div className="followus">
            <h4>FollowUs</h4>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <PinterestIcon />
            </div>
            </div>

            <div className="policy">
            <p>Powered by  Copyright © 2021 ANVSHN S.p.A. - All Rights Reserved - VAT 3rtu756432</p>
            </div>
            {/* <hr></hr> */}
            
            
        </footer>
       )
}

export default Footer
