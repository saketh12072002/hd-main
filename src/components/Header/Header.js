import React from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import {signOutUserStart} from '../../redux/User/user.action'
import  {useSelector,useDispatch} from 'react-redux'

const mapState = ({user}) => ({
    currentUser:user.currentUser
});


function Header(props) {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(mapState)

    const signOut =() => {
        dispatch(signOutUserStart()); 
    };

    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                   <Link to="/">
                        <img src={logo} alt="logohd"/>
                   </Link>
                </div>

                <div className="header_right">

                    {/* if user exist */}
                    {currentUser && (
                        <ul>
                            <li>
                            <Link to="/dashboard">
                                MyAccount
                            </Link>
                        </li>
                            <li>
                                <span className = "logout"  onClick={()=>signOut()}>
                                    Logout
                                </span>
                            </li>
                        </ul>
                    )}

                    {/* if no user */}
                    {!currentUser && (
                        <ul>
                           
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                               Login
                            </Link>
                        </li>
                    </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser:null
}


export default Header;
