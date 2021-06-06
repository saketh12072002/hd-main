import React,{useState} from 'react'
import "./styles.scss"
import user from "./../../assets/user.png"

function UserProfile(props) {
    const {currentUser} = props;
    const {displayName} = currentUser

    
    return (
        <div className="userProfile">
            <ul>
                <li>
                    <div className="img">
                        <img src={user} />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        {displayName && displayName}
                    </span>
                </li>
            </ul>
            
        </div>
    )
}

export default UserProfile
