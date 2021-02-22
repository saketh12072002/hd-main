import React, {useState,useEffect} from 'react'
import {signUpUserStart} from './../../redux/User/user.action'
import {withRouter} from 'react-router-dom'
import './styles.scss'
import Forminput from '../forms/FormInput/Forminput'
import  Button from '../forms/Button/Button'
import { useDispatch,useSelector } from "react-redux";
import AuthWrapper from "../AuthWrapper/Authwrapper";

const mapState = ({user}) => ({
    currentUser:user.currentUser,
    signUpSuccess:user.signUpSuccess,
    signUpError:user.signUpError,
    userErr:user.userErr
})

function Signup(props) {
    const {currentUser,userErr} = useSelector(mapState);
    const {signUpSuccess,signUpError} = useSelector(mapState);
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);


    const reset = () =>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors('');

    }


    useEffect(()=>{
        if(currentUser) {
            reset();
            props.history.push('/');
        }
    },[currentUser]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length >0){
            setErrors(userErr);
        }
    }, [userErr])

    
    const handleFormSubmit = async(e) => {
        e.preventDefault();
        dispatch(signUpUserStart({displayName,email,password,confirmPassword})) 
    }

    const configAuthWrapper ={
        headline:'Registration'
    }
    
    return (
    <AuthWrapper {...configAuthWrapper}>
        <div className="formwrap">

                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index)=>{
                            return (
                                <li key={index}>
                                    {err}
                                </li>
                            )
                        })}
                    </ul>
                )}

                    <form onSubmit={handleFormSubmit}>
                        <Forminput 
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Fullname"
                            handleChange={e=>setDisplayName(e.target.value)}
                            
                        />
                        

                        <Forminput 
                            type="email"
                            name="email"
                            value={email}
                            placeholder="email"
                            handleChange={e=>setEmail(e.target.value)}
                            
                        />

                        <Forminput 
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            handleChange={e=>setPassword(e.target.value)}
                            
                        />

                        <Forminput 
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="confirmPassword"
                            handleChange={e=>setConfirmPassword(e.target.value)}
                            
                        />

                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                </div>
        </AuthWrapper>
    )
}

export default withRouter(Signup)
