import React,{useState,useEffect} from 'react'
import './shttyles.scss'
import {Link} from 'react-router-dom'
// import logo from '../../assets/logo.png'
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
    const [closedrop, setClosedrop] = useState(false)
    const [closedrop1, setClosedrop1] = useState(false)
    const [closedrop2, setClosedrop2] = useState(false)
    const [closedrop3, setClosedrop3] = useState(false)
    const [closedrop4, setClosedrop4] = useState(false)
    const [closedrop5, setClosedrop5] = useState(false)

    const handleClick= () => setClick(!click);
    const closeMobileMenu =() =>setClick(false);
    

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };

    const changeBackground = () => {
        if (window.scrollY >= 80) {
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
  
    window.addEventListener('resize', showButton);


    const signOut =() => {
        dispatch(signOutUserStart()); 
    };

    return (
        <div className={navbar ? 'header_active': 'headertwo'}>
          <AdminToolbar />
            <div className="logooo">

              <div className="callToActions">
              <ul>
                <div className="signsign">
                {currentUser && [
                  <li key={1}>

                    <Link to="/dashboard">
                    {/* <AccountCircleIcon />
                     */}
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

              <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo"/>  
                    
                  </Link>
              </div>

              <div className="cartitems">
                  <div className="searchicondesktop">
                      <SearchIcon />
                   </div>
                   <div className="bookmark">
                      <BookmarkBorderIcon />
                   </div>
                   <div className="cacart">
                      <Link to="/cart">
                      <LocalMallIcon />
                      {totalNumCartItems}
                      </Link>
                   </div>
              </div>

            </div>
            <div className="wrap">
                <div className="logo">
                   {/* <Link to="/">
                        <img src={logo} alt="logohd"/>
                   </Link> */}
                   <div className="menu-icon-backgrou">  
                        <div className="menu-icon" onClick={handleClick}>    
                          <div className="menu-icon-back">
                                {click ?<CloseIcon style={{color:"black"}}/>  : <MenuIcon />}    
                          </div>                              
                        </div> 

                   </div>
                   
                   <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                   <li className="nav-item-top">

                   </li>
                  
                      <li className='nav-item'>
                      
                        <div className="nav-item-header"  onClick={()=>{setClosedrop(!closedrop)}}>
                          <div className="section-header">New</div>
                          <div className={closedrop? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop(!closedrop)}}><ArrowDropDownIcon /></div>
                        </div>
                     
                        <div className={closedrop? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>

                      </li>
                      <li className='nav-item'>
                        <div className="nav-item-header"  onClick={()=>{setClosedrop1(!closedrop1)}}>
                          <div className="section-header">Desingners</div>
                          <div className={closedrop1? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop1(!closedrop1)}}><ArrowDropDownIcon /></div>
                        </div>
                     
                        <div className={closedrop1? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                  <div className="">
                                  <Link to="/designer/The%20Haberdasher%20Co">
                                      The Haberdasher
                                    </Link>
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop2(!closedrop2)}}>
                          <div className="section-header">Men</div>
                           <div className={closedrop2? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop2(!closedrop2)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop2? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                              <Link to="/search/mens">
                                <div className="">
                                      mens
                                  </div>
                                  </Link>

                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                                 
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop3(!closedrop3)}}>
                          <div className="section-header">Women</div>
                           <div className={closedrop3? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop3(!closedrop3)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop3? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop4(!closedrop4)}}>
                          <div className="section-header">Wedding</div>
                           <div className={closedrop4? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop4(!closedrop4)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop4? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop5(!closedrop5)}}>
                          <div className="section-header">Accessories</div>
                           <div className={closedrop? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop(!closedrop)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop5? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop5(!closedrop5)}}>
                          <div className="section-header">Jewellery</div>
                           <div className={closedrop? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop(!closedrop)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop5? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                   <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop5(!closedrop5)}}>
                          <div className="section-header">Kids</div>
                           <div className={closedrop? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop(!closedrop)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop5? "sub-section":"sub-section-hide"}>
                              <div className="sub-section-item">
                                  shirts
                              </div>
                              <div className="sub-section-item">
                                  shirts
                              </div>
                              <div className="sub-section-item">
                                  shirts
                              </div>
                              <div className="sub-section-item">
                                  shirts
                              </div>
                        </div>
                      </li>
                      <li className='nav-item'>
                      <div className="nav-item-header"  onClick={()=>{setClosedrop5(!closedrop5)}}>
                          <div className="section-header">Home</div>
                           <div className={closedrop5? "section-dropdown":"section-dropdownro"} onClick={()=>{setClosedrop5(!closedrop5)}}><ArrowDropDownIcon /></div>                        </div>
                     
                        <div className={closedrop5? "sub-section":"sub-section-hide"}>
                          
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                              <div className="sub-section-item">
                                  <div className="">
                                      Shirt
                                  </div>
                                  <div className="">
         
                                    <ArrowDropDownIcon />
                                  </div>
                              </div>
                        </div>
                      </li>
                      
                      <li className='nav-item'>
                        <div className="signinitem">
                        {currentUser && [
                            <li key={1}>
                              <div className="aacount">
                              <Link to="/dashboard">
                                  account
                                </Link>
                              </div>
                             
                            </li>,
                            <li key={2}>
                              <span onClick={() => signOut()}>
                              Sign Out
                              </span>
                            </li>
                          ]}
                        </div>
                      

                          {!currentUser && [
                            <li key={1} className="hideOnMobile">
                              <Link to="/registration">
                                Registeras
                              </Link>
                            </li>,
                            <li key={2}>
                              <Link to="/login">
                                Signin
                               
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
                    
                      <Link to="/designerdetails">
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
                                    <Link to="/">
                                      Garvili
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
