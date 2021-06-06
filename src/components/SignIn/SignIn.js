import React,{useState,useEffect} from 'react'
import './styles.scss'
import {withRouter} from 'react-router-dom'
import Buttons from '../../components/forms/Button/Button'
import FormInput from './../forms/FormInput/Forminput'
import Button from './../forms/Button/Button'
import {useDispatch,useSelector} from 'react-redux'
import {emailSignInStart,googleSignInStart} from '../../redux/User/user.action'
// import userTypes from '../../redux/User/user.types'
import {Link} from 'react-router-dom'

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
                    {/* Welcome */}
                </h2>
          

                <div className="formWrap">
                
                    <form className="singinform" onSubmit={handleSubmit}>

                        <input className="signinforminput" type="email" name="email" 
                        value={email} placeholder="EMAIL" 
                            onChange={e=>setEmail(e.target.value)}
                        />

                        <input className="signinforminput" type="password" name="password" 
                        value={password} placeholder="PASSWORD" 
                            onChange={e=>setPassword(e.target.value)}
                        />

                        <Button className="button" type="submit">
                            Login
                        </Button>

                        <div className="socialSignin">
                        <div className="row">
                        <Button className="button1" onClick={handleGoogleSignIn}>
                                Sign in with google
                            </Button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="signupimg">
                
               <div className="signupname">

               <div className="matter">
                    <h2>New here ?</h2>
                    <p>
                        Signup and discover
                    </p>
                </div>
               <Link to="/registration">
                     <div className="signup">
                         SIGNUP
                     </div>
                    </Link>
               </div>
                <div className="signupimage">
                    <img src="https://static3.azafashions.com/tr:w-270,dpr-2,e-sharpen/uploads/banner_templates/bangles-bracelets-0614480001615283737.jpg" />
                </div>
            </div>
        </div>
    )
}

export default withRouter(SignIn)
