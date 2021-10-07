import React,{useState,useEffect} from 'react'
import './styles.scss'
import {Link,useHistory} from 'react-router-dom'
import logo from './../../assets/logopngedit.png'
import name from './../../assets/New folder/name.png'
import {signOutUserStart} from '../../redux/User/user.action'
import  {useSelector,useDispatch} from 'react-redux'
import { selectCartItemsCount} from './../../redux/Cart/cart.selector'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AdminToolbar from './../../components/AdminToolbar/AdminToolbar'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {AnimatedSocialIcon} from 'react-animated-social-icons'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';



const mapState = (state) => ({
    currentUser:state.user.currentUser,
    totalNumCartItems:selectCartItemsCount(state),
    // totalNumWishlistItems:selectWishlistItemsCount(state)
    
});

  
function Header(props) {
    const dispatch = useDispatch()
    const {currentUser, totalNumCartItems} = useSelector(mapState)
    const [click,setClick] = useState(false)
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const history = useHistory();
    const [addcart, setAddcart] = useState(false);
 

    const handleClick= () => setClick(!click);
    const closeMobileMenu =() =>setClick(false);

    const goToPreviousPath = () => {
      history.goBack()
  }

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    const changeBackground = () => {
        if (window.scrollY >= 30) {
          setNavbar(true);
        }
        else {
          setNavbar(false)
        }
      }
  
      window.addEventListener('scroll', changeBackground);

    useEffect(() => {
      showButton();
    }, []);

    const popcartfun =()=>{
      setTimeout(() => {
          setAddcart(true)
        }, 2000);
  }

    useEffect(()=>{
      setAddcart(true)
      popcartfun();
    },[totalNumCartItems])
  
    window.addEventListener('resize', showButton);


    const signOut =() => {
        dispatch(signOutUserStart()); 
    };

    return (
        <div className={navbar ? 'heeadertwo': 'heeader_active '}>
          <AdminToolbar />
          <div className="logooo">

              <div className="callToActions">
              <ul>
                <div className="signsign">
                {currentUser && [
                  <li key={1}>

                    <Link to="/dashboard">
                    account
                    </Link>
                  </li>,
                  <li key={2}>
                    <span onClick={() => signOut()}>
                    Sign Out
                    </span>
                  </li>
                ]}

                {!currentUser && [
                  <li key={1} className="hideOnMobile">
                    <Link to="/registration">
                      Register
                    </Link>
                  </li>,
                  <li key={2}>
                    <Link to="/login">
                      Signin
                      <i class="fas fa-user-circle"></i>
                    </Link>
                  </li>
                ]}
                </div>

              </ul>
                    </div>
                    <div className="backicon" onClick={goToPreviousPath}><KeyboardBackspaceIcon /></div>

              <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo"/>  
                   
                    
                  </Link>
              </div>

              <div className="cartitems">
                  <div className="searchicondesktop">
                      {/* <SearchIcon /> */}
                  </div>
                  <div className="bookmark">
                    <Link to ="/wishlist">
                    <BookmarkBorderIcon />
                    </Link>
                      
                  </div>
                  <div className="cacart">
                      <Link to="/cart">
                      <LocalMallIcon />
                      {totalNumCartItems}
                      </Link>
                  </div>
                  {/* <div className={addcart?"addded":"adddedhide"}>product added to cart</div> */}
              </div>

              </div>

            
            <div className="wrap">
                <div className="logo">
                   {/* <Link to="/">
                        <img src={logo} alt="logohd"/>
                   </Link> */}
                   <div className="menu-icon" onClick={handleClick}>                    
                     {click ?<CloseIcon style={{color:"black"}}/>  : <MenuIcon />}                    
                   </div> 
                   <div className="searchicon">
                     {/* <SearchIcon /> */}
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Clothing
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                          Designers
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                          Collectioins
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                          Sale
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                          Men
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                          Kids
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/login' className='nav-links' >
                          Women
                        </Link>
                      </li>
                      
                      <li className='nav-item'>
                      {currentUser && [
                            <li key={1}>
                              <Link to="/dashboard">
                              <AccountCircleIcon /> 
                                <i class="fas fa-user-circle"></i>
                              </Link>
                            </li>,
                            <li key={2}>
                              <span onClick={() => signOut()}>
                              Sign Out
                              </span>
                            </li>
                          ]}

                          {!currentUser && [
                            <li key={1} className="hideOnMobile">
                              <Link to="/registration">
                                {/* Register */}
                              </Link>
                            </li>,
                            <li key={2}>
                              <Link to="/login">
                                Signin
                                <i class="fas fa-user-circle"></i>
                              </Link>
                            </li>
                          ]}
                      </li>
                   </ul>
                </div>
                {/* className={`mainMenu ${activeMenu ? 'active' : ''}`} */}
                <nav >
                  <ul>
                  <li>
                      <Link to="/anvshn">
                        anvshn
                      </Link>
                    </li>
                    <li className="drop">
                    
                      <Link to="/">
                        Designer
                        <ArrowDropDownIcon />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                          <div className="list-item">
                            <h4 className="title">
                            <ul>
                              <ul>
                                <h3>Top Designers</h3>
                                <li>
                                    <Link to="/designer/The%20Haberdasher%20Co">
                                      The Haberdasher
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/designer/108 Bespoke">
                                      108 Bespoke
                                    </Link>
                                </li>
                              </ul>
                              <ul>
                                <h3>Trending</h3>
                                <li>
                                    <Link to="/">
                                      Tanya Batra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Vineshya Vintage
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anul Pyshak
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Keerthy Reddy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anil Kaushik
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Ashish Bandra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Periya Sense
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      BruH Simpl
                                    </Link>
                                </li>
                              </ul>
                              <ul>
                                <h3>Popular</h3>
                                <li>
                                    <Link to="/">
                                      Pankaj Tiwari
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Jagan Reddy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      CB Naidu
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Contemp Junta
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Sravya Sriram
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/search/dresstype/shirt">
                                      Chadra Sets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Leo Network
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Richa Panay
                                    </Link>
                                </li>
                              </ul>
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/tr:w-234/uploads/product_gallery/16_2104_sg_4-0905397001618995289.jpg "/>
                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/tr:w-234/uploads/product_gallery/16_2104_sg_4-0905397001618995289.jpg "/>
                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              {/* <li>
                              <Link to="/">
                                Bandhgala
                                </Link>
                                
                              </li>
                              <li>
                              <Link to="/">
                                Bandi
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Shirts
                                </Link>
                              </li>
                              <li>
                              <Link to="/search/mens">
                                Trousers
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Indo-Western
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Suits
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Kurtas
                                </Link>
                              </li> */}
                              
                            </ul>
                             
                            </h4>
                          </div>
                      </div>
                    </li>
                    <li className="drop">
                    
                      <Link to="/search/mens">
                        men
                        <ArrowDropDownIcon />
                      </Link>
                      <div className="sub-menu mega-menu mega-menu-column-4">
                          <div className="list-item">
                            <h4 className="title">
                            <ul>
                              <ul>
                                <h3>Trending</h3>
                                <li>
                                    <Link to="/">
                                      New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Celebration style
                                    </Link>
                                </li>
                              </ul>
                              <ul>
                                <h3>Categories</h3>
                                <li>
                                    <Link to="/">
                                      Kurta Sets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Kurtas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Sherwani
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Nehru Jacket & Sets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Bandhgalas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Shirts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Bandhgalas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Shirts
                                    </Link>
                                </li>
                                
                              </ul>
                              
                              <ul>
                                <h3>Designers</h3>
                                <li>
                                    <Link to="/">
                                      Tanya Batra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Vineshya Vintage
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anul Pyshak
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Keerthy Reddy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anil Kaushik
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Ashish Bandra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Periya Sense
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      BruH Simpl
                                    </Link>
                                </li>
                              </ul>
                             
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/uploads/product_gallery/ppc-m-102_4-0768519001603533163.jpg "/>

                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/uploads/product_gallery/ppc-m-102_4-0768519001603533163.jpg "/>
                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              {/* <li>
                              <Link to="/">
                                Bandhgala
                                </Link>
                                
                              </li>
                              <li>
                              <Link to="/">
                                Bandi
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Shirts
                                </Link>
                              </li>
                              <li>
                              <Link to="/search/mens">
                                Trousers
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Indo-Western
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Suits
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Kurtas
                                </Link>
                              </li> */}
                              
                            </ul>
                             
                            </h4>
                          </div>
                      </div>
                    </li>

                    <li className="drop">
                    <Link to="/search/womens">
                      women
                      <ArrowDropDownIcon />
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                        <div className="list-item">
                          <h4 className="title">
                            {/* Mens fashion */}
                            <ul>
                              <ul>
                                <h3>Trending</h3>
                                <li>
                                    <Link to="/">
                                      New Arrivals
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Celebration style
                                    </Link>
                                </li>
                              </ul>
                              <ul>
                                <h3>Categories</h3>
                                <li>
                                    <Link to="/">
                                      Kurta Sets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Kurtas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Sherwani
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Nehru Jacket & Sets
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Bandhgalas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Shirts
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Bandhgalas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Shirts
                                    </Link>
                                </li>
                              </ul>
                              <ul>
                                <h3>Designers</h3>
                                <li>
                                    <Link to="/">
                                      Tanya Batra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Vineshya Vintage
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anul Pyshak
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Keerthy Reddy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Anil Kaushik
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Ashish Bandra
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      Periya Sense
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                      BruH Simpl
                                    </Link>
                                </li>
                              </ul>
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/tr:w-234/uploads/product_gallery/16_2104_sg_4-0905397001618995289.jpg "/>
                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              <ul className="inheaderimage">
                                <img src="https://static3.azafashions.com/tr:w-234/uploads/product_gallery/16_2104_sg_4-0905397001618995289.jpg "/>
                                <div className="desingner">Designer</div>
                                <div className="shopnow">Shop Now</div>
                              </ul>
                              
                              {/* <li>
                              <Link to="/">
                                Bandhgala
                                </Link>
                                
                              </li>
                              <li>
                              <Link to="/">
                                Bandi
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Shirts
                                </Link>
                              </li>
                              <li>
                              <Link to="/search/mens">
                                Trousers
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Indo-Western
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Suits
                                </Link>
                              </li>
                              <li>
                              <Link to="/">
                                Kurtas
                                </Link>
                              </li> */}
                              
                            </ul>
                          </h4>
                        </div>
                    </div>
                  </li>
                    <li>
                      <Link to="/dropdesign">
                       Drop Design
                      </Link>
                    </li>
                    <li>
                      <Link to="/appointment">
                        Appointment 
                      </Link>
                    </li>
                    <li>
                      <Link to="/blogs">
                        blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/aboutus">
                        AboutUs
                      </Link>
                    </li> */}
                  </ul>
                </nav>

            
                </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser:null
}


export default Header;
