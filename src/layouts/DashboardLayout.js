import React from 'react'
import Header from "../components/Header/Header"
import VerticalNav from "./../components/VerticalNav/VerticalNav"
import {Link} from "react-router-dom"
import Footer from "./../components/Footer/Footer"
import {signOutUserStart} from './../redux/User/user.action'
import {useDispatch} from "react-redux"

function DashboardLayout(props) {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    };

    return (
        <div className="dashboardLayout">
            <Header {...props}/>
            <div className="controlPaneldash">
                <div className="sidebardash">
                    <VerticalNav>
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                Home
                                </Link>
                            </li>
                            <li>
                                <span className="signOut" onClick={() => signOut()}>
                                Sign Out
                                </span>
                            </li>
                        </ul>
                    </VerticalNav>
                </div>
                <div className="contentdash">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default DashboardLayout
