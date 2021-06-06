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

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,

});

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);
  const [coupon, setCoupon] =useState()
  const errMsg = 'You have no items in your cart.';
  console.log('asdad')
  console.log(cartItems)
  return (
    <div className="checkout">
     
     

      <div className="cart">
        {cartItems.length > 0 ? (
          <table border="0" cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td>
                  <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <th>
                          Product
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Quantity
                        </th>
                        <th>
                          Price
                        </th>
                        <th>
                          Size
                        </th>
                        <th>
                          Remove
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="checkoutshoppingbag">
                    Shopping bag
                  </div>
                 <div className="allignitems">
                  
                    <div className="itemdetails">
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
                      <div className="coupontext">
                              Have a Coupon code ?
                      </div>
                      <input className="couponinput"
                                                    label="Name"
                                                    type="text"
                                                    value={coupon}
                                                    handleChange={e => setCoupon(e.target.value)}
                                                />
                        
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

                                    <div className="checkoutbuttons">
                                    <Button className="checkoutbutton" onClick={() => history.push('/payment')}>
                                    Checkout
                                  </Button>
                                    </div>
                                    
                        </div>
                    
                 </div>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <table border="0" cellSpacing="0" cellPadding="0">
                    <tbody>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td className="total">
                                <h3>
                                  Total: Rs. {total}
                                </h3>

                                
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table border="0" cellPadding="10" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td>
                                  <Button onClick={() => history.goBack()}>
                                    Continue Shopping
                                  </Button>
                                </td>
                                <td>
                                  <Button onClick={() => history.push('/payment')}>
                                    Checkout
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr> */}
            </tbody>
          </table>
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
