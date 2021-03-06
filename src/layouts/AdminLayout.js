import React from 'react'
import {Link} from "react-router-dom"
import Header from './../components/Header/Header'
import VerticalNav from "./../components/VerticalNav/VerticalNav"
import Footer from "./../components/Footer/Footer"
import {useDispatch} from "react-redux"
import { signOutUserStart } from './../redux/User/user.action';

function AdminLayout(props) {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(signOutUserStart());
    };
    return (
        <div className="adminLayout">
            <Header {...props} />
            <div className="controlPanel">
                <div className="sidebar">
                    <VerticalNav>
                        <ul>
                            <li> 
                                <Link to="/admin">
                                    Home
                                </Link>
                            </li>
                            <li> 
                                <Link to="/admin/designers">
                                    Designers
                                </Link>
                            </li>
                            <li> 
                                <Link to="/admin/blogs">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <span className="signOut" onClick={()=>signOut()}>
                                    Sign Out
                                </span>
                            </li>
                        </ul>
                    </VerticalNav>
                    
                </div>
                <div className="content">
                        {props.children}
                    </div>
            </div>       
        {/* <Footer />      */}
        </div>
    )
}

export default AdminLayout
