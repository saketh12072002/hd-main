import React,{useState} from 'react'
import './styles.scss'
import MenuIcon from '@material-ui/icons/Menu';
import name from './../../assets/New folder/name.png'
import {signOutUserStart} from './../../redux/User/user.action'
import  {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';

const mapState = (state) => ({
    currentUser:state.user.currentUser,
    
    // totalNumWishlistItems:selectWishlistItemsCount(state)
    
});

function Thankyou() {
    const dispatch = useDispatch()
    const {currentUser} = useSelector(mapState)
    const[test, setTest]= useState('adasd')
    const signOut =() => {
        dispatch(signOutUserStart()); 
    };
    return (
        <div className="thankyou">
            <div className="tyheader">
                <div className="">
                        <MenuIcon />
                </div>
                <div className="tyimage">
                    <Link to="/registration">
                        <img src={name} />
                    </Link>
                </div>
                <div className="tysignout">
                    <ul>
                        
                        {currentUser && [
                            <li key={1}>
                                
                            </li>,
                            <li key={2}>
                                <span onClick={() => signOut()}>
                                Sign Out
                                </span>
                            </li>
                            ]}
                    </ul>
                        
                </div>
                
            </div>
            <div className="big">
            {/* <img src="https://lh3.googleusercontent.com/P6tZyb1wcllfsLM8E8mVvoLDyhyei8Zn5A84KHZ7dQwINo85mTMmuJZSTqnWChTwDKq2y8diPBTWAubWR1p3abzG9HDuIaYKm8BcFpZjPAoQqtFsnBw329cxWhZImRQ3BWgCcTLkVIZdxmsdZx-mbEpCFbCFEpA19NGZ7FqF6LWfngMr0B0dtscdTTzxrmTBJazhLG8SbRBagzZHriVssCx6HKrtQj3B9OJBIZ3mafWpaR11SECYmR3eLv9LJ9sGY6RsDh6CoDMQ1-lbf-rW30cLPo-XafITcQl_abxKv2QzmR9dAqR1-C39-bioxmYF7CuW2HzCU1Gkm35gHgwbdpn1xLekhShj9l_34agROkieiML360WbzGhhl-QbZbnmnof0aOzEuVEarBLBhotGkenVWJJCtQ31AZjOszQ7ilRiD_uXJMqwh8IqnOJMmCclabuhNgXrn0KEMN2ftuKCB9sGQVggDYDdl250hLhuQx3s5XMdVfW_ReY0C1Ti2j7Rd6X5yptbBs49r_pIsj-6apMxlMM9Jy3Vbeq_ptaJLF4-JYdF0uvPTRCsZNxbnfYItNXJXfYxTVdCPgSzYHcTUZ6kV6MgL4NagKpBNNwGotNA4tjsloAR-P1OGMsr91_8HvRsXpwqcYLutSOtzNuSsEtgB3pKQbZN7WGu3cBXiKXNumQRI1LK9jv1kxDXK1jWNLj5xrPZ21DsXdxBk4UVe2A=w1280-h853-no?authuser=3" /> */}

            </div>
            
          
        </div>
    )
}

export default Thankyou
