import React,{useState,useEffect} from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'
// import logo from '../../assets/logo.png'
import logo from './../../assets/New folder/logo.png'
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
// import {selectWishlistItemsCount} from './../../redux/Wishlist/wishlist.selector'
// import {selectWishlistItemsCount } from './../../redux/Wishlist/wishlist.selector'
import Search from './../../components/Search/Search'
import AdminToolbar from './../../components/AdminToolbar/AdminToolbar'
import LocalMallIcon from '@material-ui/icons/LocalMall';

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
  

 

    const handleClick= () => setClick(!click);
    const closeMobileMenu =() =>setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    


    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);


    const signOut =() => {
        dispatch(signOutUserStart()); 
    };

    return (
        <div className='header'>
          <AdminToolbar />

                 
                   
            
            <div className="wrap">
            <div className="sidelogo">
                 <Link to="/">
                        <img src={logo} alt="logohd"/>
                   </Link>
                 </div>
                <div className="logo">
                 
                   <div className="menu-icon" onClick={handleClick}>
                      {click ?<CloseIcon />  : <MenuIcon />}                    
                   </div> 
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                      <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                          Newarrivals
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/search' className='nav-links' onClick={closeMobileMenu}>
                          Store
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/cart' className='nav-links' onClick={closeMobileMenu}>
                          Cart
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/login' className='nav-links' >
                          Login
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link to='/cart' className='nav-links' onClick={() => signOut()}>
                          Logout
                        </Link>
                      </li>
                   </ul>
                </div>
                {/* className={`mainMenu ${activeMenu ? 'active' : ''}`} */}
                <nav >
                  <ul>
                  <li>
                      <Link to="/">
                        anvshn
                      </Link>
                    </li>
                    <li>
                      <Link to="/designers/Haberdasher">
                        designers
                      </Link>
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
                                    <Link to="/search/dresstype/shirt">
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
                      <Link to="/appointment">
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
                <div className="callToActions">
              <ul>
                <li>
                  <Link to="/cart">
                  <LocalMallIcon /> {totalNumCartItems}
                  </Link>
                </li>
                <li>
                  {/* <Link to="/wishlist">
                    Your Wishlist ( {totalNumWishlistItems} )
                    <i class="fas fa-shopping-basket"></i>
                  </Link> */}
                </li>

                {currentUser && [
                  <li key={1}>
                    <Link to="/dashboard">
                    {/* <AccountCircleIcon />  */}
                      {/* <i class="fas fa-user-circle"></i> */}
                    </Link>
                  </li>,
                  <li key={2}>
                    <span onClick={() => signOut()}>
                    {/* <ExitToAppIcon /> */}
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

                {/* <li className="mobileMenu">
                  <span onClick={() => setActiveMenu(!activeMenu)}>
                    <i className="fas fa-bars"></i>
                  </span>
                </li> */}

              </ul>
                    </div>
            
                </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser:null
}


export default Header;
