import React from 'react'
import './styles.scss'
import name from './../../assets/New folder/name.png'
import { Link } from 'react-router-dom'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function Headerthree() {
    return (
        <div className="headerthree">
            
            <div className="headerthreelogo">
               
                <Link to="/">
                    <img src={name} alt="name"/>  
                  </Link>

            </div>
            <div className="middlesection">
                <div className="firstcart">
                    Checkout
                </div>
                <div className="dots">
                    ------------
                </div>
                <div className="secondaddress">
                    Address
                </div>
                <div className="dots">
                    ------------
                </div>
                <div className="thirdpayment">
                    Payment
                </div>
            </div>
            <div className="secureimage">
                <div className="">
                <VerifiedUserIcon />
                </div>
                <div className="">
                100% Secure
                </div>
                 
            </div>
        </div>
    )
}

export default Headerthree
