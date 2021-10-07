import React from 'react'
import './styles.scss'
import {Link} from "react-router-dom"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Designerslider(datad) {
    // const insta = datad.instaLink
    
    return (
        <div className="designerslider">
            <div className="designerbackground">
                <div className="designercontent">
                    <div className="designercontentheader">
                            About us
                    </div>
                    <div className="designercontenttext">
                        {datad.designerInfo}
                    </div>
                    <div className="designerbackground2">
                        <div className="designercontent2">
                        <div className="designercontent2header">
                            Follow Us
                        </div>
                        <div className="designercontent2content">
                            <a href={datad.instaLink}><InstagramIcon /></a>
                            <a href={datad.fbLink}> <FacebookIcon /></a>
                            {/* <a href={datad.instaLink}><LinkedInIcon /></a> */}
                            <a href={datad.youtubeLink}><YouTubeIcon /></a>
                            <a href={datad.pinterestLink}> <PinterestIcon /></a>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Designerslider
