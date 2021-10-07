import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/Button/Button';
import Item from './Item/Item';
import DeleteIcon from '@material-ui/icons/Delete';
import Forminput from './../forms/FormInput/Forminput'
import { apiInstance } from '../../Utils';
import Footer from '../Footer/Footer';
import Headerthree from '../headerthree/Headerthree';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});



// function loadScript(src) {
//   return new Promise ((resolve) => {

//     const script = document.createElement('script')
//     script.src = src

//     script.onload = () =>{
//       resolve(true)
//     }
//     script.onerror = () =>{
//       resolve(false)
//     }
//     document.body.appendChild(script)
//   })
  
// }

const __DEV__ = document.domain === 'localhost'

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  console.log('cartitems')
  console.log(cartItems)
  const [coupon, setCoupon] =useState()
  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout">
      <div>
        <Headerthree />
      </div>
      <div className="cart">
        {cartItems.length > 0 ? (
          <div className="checkoutlayout">
                  {/* <div className="checkoutshoppingbag">
                    Order Details - {cartItems.length} Item(s)
                  </div> */}
                 <div className="allignitems">
                  
                    <div className="itemdetails">
                    <div className="checkoutshoppingbag">
                        Order Details - {cartItems.length} Item(s)
                      </div>
                        <table border="0" cellSpacing="0" cellPadding="0">
                            <tbody>
                              {cartItems.map((item, pos) => {
                                return (
                                  <tr key={pos}>
                                    <td>
                                      <Item {...item} />
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                    </div>
                    <div className="pricecouponDetails">
                    <div className="">
                              
                        <div>
                         
                        </div> 
                    </div>
                    <div className="priceDetails">
                                        <div className="priceproductdetials">
                                            <div className="priceproductdetialstitle">
                                                Price Details
                                            </div>
                                            <div className="priceproductdetialsbag">
                                                <div className="pricedetialsbagtitle">
                                                      Bag Total
                                                </div>
                                                <div className="pricedetialsbagprice">
                                                ₹ {total}
                                                </div>
                                            </div>
                                            <div className="priceproductdetialsshipping">
                                                <div className="pricedetialsshiping">
                                                    Shipping Charges
                                                </div>
                                                <div className="pricedetialsshipingmoney">
                                                ₹10
                                                </div>
                                            </div>
                                            <div className="priceproductdetialstax">
                                                <div className="pricedetialstax">
                                                      GST
                                                </div>
                                                <div className="pricedetialstaxmoney">
                                                ₹231
                                                </div>
                                            </div>
                                            <div className="priceproductdetialstotal">
                                                <div className="pricedetialsordetotal">
                                                      Order Total
                                                </div>
                                                <div className="pricedetialsordetotalprice">
                                                ₹ {total}
                                                </div>
                                            </div>  
                                            
                                            
                                        </div>
                                        <div className="placeorderbutton">

                                        </div>
                                    </div> 

                                    {/* {() => history.push('/payment')} */}
                                    <div className="checkoutbuttons">
                                    <Button className="checkoutbutton" onClick={()=>history.push('/payment')}>
                                        Checkout
                                    </Button>
                                    </div>
                                    
                        </div>
                    
                 </div>
                 <div className="marginbottom">

                   </div>
                 {/* <Footer /> */}
          </div>
        ) : (
            <p>
              {errMsg}
            </p>
          )}
      </div>
       
    </div>
    

    
  );
};

export default Checkout;
  