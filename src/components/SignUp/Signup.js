import React, {useState,useEffect} from 'react'
import {signUpUserStart,googleSignInStart,facebookSignInStart} from './../../redux/User/user.action'
import { withRouter} from 'react-router-dom'
import './styles.scss'
import Forminput from '../forms/FormInput/Forminput'
import  Button from '../forms/Button/Button'
import { useDispatch,useSelector } from "react-redux";
import AuthWrapper from "../AuthWrapper/Authwrapper";
import logo4 from './../../assets/New folder/logo4.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Modal from './../Modal/Modal'
import CloseIcon from '@material-ui/icons/Close';
import emailjs from 'emailjs-com';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import Fullloader from './../../components/Fullloader/Fullloader'

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
    const [hideModal, setHideModal] = useState(true);
    const [checkpass,setCheckpass] = useState(false)
    const [passerror, setPasserror] = useState('')
    const [loader, setLoader] = useState(false)

    const reset = () =>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors('');

    }
   


    function sendEmail(e) {
        // e.preventDefault();
    
        emailjs.sendForm('service_g6rbvtg', 'template_0fk3m0a', e.target, 'user_uh9FZHGEceRQL50NMAOUV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
            //   console.log(error.text);
          });
          e.target.reset()
      }

  




    useEffect(()=>{
        if(currentUser) {
            reset();
            props.history.push('/thankyou');
        }
    },[currentUser]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length >0){
            setErrors(userErr);
        }
    }, [userErr])
   

    
    const handleFormSubmit = async(e) => {
        
        e.preventDefault();
        console.log('errors')
        console.log(errors)
       
        if(passwordcheck()===true){
            sendEmail(e);
            dispatch(signUpUserStart({displayName,email,password,confirmPassword})) 
            setLoader(true)
            setPasserror('')
            setTimeout(()=>{
                setLoader(false)
            },3000)
        }
        else {
            setPasserror('*')
        }
        
        
    }
    
    const passwordcheck =() => {
        
       
        if(password===confirmPassword && password.length >= 8)
        {
            setCheckpass(true)
            return true
        }
        
        else {
            setCheckpass(false)
        }
    }

    useEffect (()=>{
        passwordcheck();
    },[confirmPassword])

  
    const handleGoogleSignIn =() =>{
        dispatch(googleSignInStart());
    }
    const handleFacebookSignIn =() =>{
        dispatch(facebookSignInStart());
    }

    const toggleModal = () => {
        setHideModal(!hideModal)
    }

    const configModal = {
        hideModal,
        toggleModal
    }

    const configAuthWrapper ={ 
        headline:''
    }
    
    return (
    <AuthWrapper {...configAuthWrapper}>
        <div className="signupformwrapp">

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
                {/* <div className="firstpart">
                    Get 1nsovn
                </div> */}
                <div className="secondpart">
                    <div className="signupimg">
                        <div className="firstpart">
                            <div className="discount">Get 20% discount</div> 
                            <div className="shipping">free shipping on your first purchase</div>
                        </div>
                        <img src ="https://images.unsplash.com/photo-1565324777053-0f607a0d3bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1892&q=80" />
                    </div>

                    <div className="buttoncontentform">
                   
                        <div className="signuplogo">
                            <img src={logo4} />
                        </div>


                        <div className="welcomeanvshn">
                            Welcome to ANVSHN
                        </div>
                       
                    
                        <div className="signupformscontent">
                                <form className="signupform" onSubmit={handleFormSubmit}>
                                    <div className="formtitle">User name</div>
                                    <input className="signupforminput"
                                        type="text"
                                        name="displayname"
                                        value={displayName}
                                        placeholder=""
                                        onChange={e=>setDisplayName(e.target.value)}
                                        required    
                                        
                                    />
                                
                                    <div className="formtitle">E-mail</div>
                                    <input className="signupforminput"
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder=""
                                        onChange={e=>setEmail(e.target.value)}
                                        required
                                        
                                    />
                                    <div className="checkp">
                                        <div className="formtitle">Password</div>
                                        <div className="" style={{ color: "red" }} >{passerror}</div>
                                    </div>
                                    
                                    <input className="signupforminput"
                                        type="password"
                                        name="password"
                                        value={password}
                                        placeholder=""
                                        onChange={e=>setPassword(e.target.value)}
                                        
                                    />
                                    <div className="passwarning">* your password must be between 8 and 30 characters</div>
                                    <div className="checkp">
                                        <div className="formtitle">Confirm Password</div>
                                        <div className={checkpass? 'green' : 'nogreen'}>
                                                <DoneOutlineIcon />
                                        </div>
                                    </div>
                                    <input className="signupforminput"
                                        type="password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        placeholder=""
                                        onChange={e=>setConfirmPassword(e.target.value)}
                                        
                                    />
                                    
                                    

                                    <Button className="signupbutton" type="submit">
                                        Register
                                    </Button>
                                </form>
                        </div>
                        <div className="signuplineor">
                            <div className="line1"></div>
                            <div className="signupor">OR</div>
                            <div className="line2"></div>
                        </div>
                        <div className="signupbuttons">
                            <div className="row">
                                <Button  className="signupbutton" onClick={handleGoogleSignIn}>
                                <div className="google">
                                Sign up with  google
                                            
                                        </div>
                                        
                                </Button>
                            </div>
                            {/* <div className="row">
                                <Button className="signupbutton" onClick={handleFacebookSignIn}>
                                        <div className="facebook">
                                            < FacebookIcon />
                                        </div>
                                        Sign up with facebook
                                </Button>
                            </div> */}
                            
                        </div>
                        <div className="signuplineor">
                            <div className="line1"></div>
                            <div className="signupor">Follow us</div>
                            <div className="line2"></div>
                        </div>

                        <div className="signupicons">
                        <a className="facebook" href=" https://www.facebook.com/Anvshn-108569548073357">
                                <FacebookIcon style={{ color: "rgb(66,103,178)" }} />
                        </a>
                        
                            
                        <a href="https://www.instagram.com/house_of_anvshn/?hl=en">
                            <InstagramIcon style={{ color: "#e1306c" }} />
                        </a>
                        <a href="https://www.linkedin.com/company/anvshn/?viewAsMember=true">
                            <LinkedInIcon  style={{ color: "rgb(0, 119, 181)" }}/> 
                        </a>
                        <a href="https://in.pinterest.com/designer2747/_saved/">
                            <PinterestIcon  style={{ color: "#c8232c" }}/>
                        </a>
                        
                    
                    
                        </div>
                    </div>  
                </div>
                
                <div className={loader? 'fullloader':'fulldeactive'}>
                    <Fullloader />
                </div>
                
                
                <Modal {...configModal}>
                        <div className="modaltextpara">
                            <div className="" onClick={() => toggleModal()}>
                                <CloseIcon  />
                            </div>
                            
                            <div className="modaltext">Hola! Something awesome is in the works</div>
                            <div className="modalpara">We are working on an exciting product that we think you'll really like. <b>Sign up</b> yourself and crack the best offers on the launch day.</div>
                        </div>
                        
                </Modal>

                
        </div>
        </AuthWrapper>
    )
}

export default withRouter(Signup)
