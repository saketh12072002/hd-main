import React from 'react'
import './styles.scss'
import {Link} from "react-router-dom"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Footer() {
    return (
        <footer className="footer">
            
            <div className="getourmails">
            
            <div className="">
            Like it? Share it!
            </div>
            <div className="">
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
              
            </div>

           
            </div>
            <div className="info">

                

            <div className="customercare">
                    <h4>customer care</h4>
                    <Link to="/returns">
                        <p>Exchange and Return</p>
                    </Link>
                   
                    <Link to="">
                        <p>Order Tracking</p>
                    </Link>
                  
                    <Link to="/wallet">
                         <p>Wallet</p>
                    </Link>
                    
                   
                    <Link to="/cancelpolicy">
                        <p>Cancellation Policy</p>
                    </Link>
                    <Link to="/sizechart">
                        <p>Size Chart</p>
                    </Link>
                    <Link to="/paymentoptions">
                        <p>Payment Options</p>
                    </Link>
                    
                    
            </div>
            <div className="company">
            <h4>The company</h4>
            <Link to="">
                 <p>About Us</p>
            </Link>
           
            <Link to="/termsandconditions">    
            <p>Terms & Conditions</p>
            </Link>
                   
                
                <Link to="/faqs">
                <p>Faqs</p>
                </Link>
                <Link to="/shipping">
                <p>Shipping</p>
                </Link>
                
                 
            </div>
            <div className="Legal">
            <h4>Contact Us</h4>
            
                
                    <p>Email: contact@anvshn.com</p>
                    <p>9600068595</p>
            </div>
            <div className="followus">
            <h4>Follow Us</h4>
                <InstagramIcon />
                <FacebookIcon />
                <br />
                <LinkedInIcon />
                <YouTubeIcon />
                <PinterestIcon />
            </div>
            </div>

            <div className="policy">
            <p>All Rights Reserved & Copyright © 2021 ANVSHN</p>
            </div>
            {/* <hr></hr> */}
            
            
        </footer>
       )
}

export default Footer
