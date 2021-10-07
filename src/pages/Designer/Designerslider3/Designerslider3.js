import React from 'react'
import Button from '../../../components/forms/Button/Button'
import './styles.scss'
import {Link} from 'react-router-dom'

function Designerslider() {
    return (
        <div className="designerslider">
            <div className="designerbackground">
                <div className="designercontent">
                    <div className="designercontentheader">
                            {/* Contact us */}
                    </div>
                    <div className="designercontenttext">
                        <Link to="/appointment">
                            <Button>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Designerslider
