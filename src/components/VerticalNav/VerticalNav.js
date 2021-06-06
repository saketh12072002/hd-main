import React from 'react'
import "./styles.scss"
import UserProfile from "./../../components/UserProfile/UserProfile"
import {useSelector} from "react-redux"


const mapState =({user}) => ({
    currentUser:user.currentUser
})

function VerticalNav({children}) {
    const {currentUser} = useSelector(mapState)

    const configUserProfile = {
        currentUser
    }
    return (
        <div className="verticalNav">
            <UserProfile {...configUserProfile} />

            <div className="menu">
                {children}
            </div>

        </div>
    )
}

export default VerticalNav
