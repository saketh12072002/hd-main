import React,{useState,useEffect} from 'react'
import './styles.scss'
import {withRouter} from 'react-router-dom'
import Buttons from '../../components/forms/Button/Button'
import FormInput from './../forms/FormInput/Forminput'
import Button from './../forms/Button/Button'
import {useDispatch,useSelector} from 'react-redux'
import {emailSignInStart,googleSignInStart} from '../../redux/User/user.action'
// import userTypes from '../../redux/User/user.types'

const mapState = ({user}) => ({
    currentUser: user.currentUser
})

function SignIn(props ) { 
    const {currentUser} = useSelector(mapState);
    const dispatch = useDispatch();
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(()=>{
        if(currentUser){
            setEmail('');
            setPassword('')
            props.history.push('/')
        }
    },[currentUser])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({email,password}));
    }

    const handleGoogleSignIn =() =>{
        dispatch(googleSignInStart());
    }

    return (
        <div className="signin">
            <div className="wrap">
                <h2>
                    Login
                </h2>
          

                <div className="formWrap">
                
                    <form onSubmit={handleSubmit}>

                        <FormInput type="email" name="email" 
                        value={email} placeholder="email" 
                            onChange={e=>setEmail(e.target.value)}
                        />

                        <FormInput type="password" name="password" 
                        value={password} placeholder="password" 
                            onChange={e=>setPassword(e.target.value)}
                        />

                        <Button type="submit">
                            Login
                        </Button>

                        <div className="socialSignin">
                        <div className="row">
                        <Buttons onClick={handleGoogleSignIn}>
                                Sign in with google
                            </Buttons>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignIn)
