import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import FormInput from './../forms/FormInput/Forminput';
import Button from './../forms/Button/Button';
import { CountryDropdown } from 'react-country-region-selector';
import { apiInstance } from './../../Utils';
import { selectCartTotal, selectCartItemsCount, selectCartItems } from './../../redux/Cart/cart.selector';
import { saveOrderHistory } from './../../redux/Orders/orders.actions';
import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import Item from '../Checkout/Item/Item';
import Paymentitems from './paymentitem/Paymentitems';
import {motion} from 'framer-motion'
import Razorpay from 'razorpay'; 
import axios from 'axios';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,

});

const discount = "asdad"


const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
};

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'


const PaymentDetails = () => {
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();
  const { total, itemCount, cartItems } = useSelector(mapState);
  const dispatch = useDispatch();
  const [billingAddress, setBillingAddress] = useState({ ...initialAddressState });
  const [shippingAddress, setShippingAddress] = useState({ ...initialAddressState });
  const [recipientName, setRecipientName] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coupon, setCoupon] = useState('');
  const [ recipientLastName, setRecipientLastName] = useState('');
  const [totalafdis, setTotalafdis] = useState()
  const [savedmoney, setSavedmoney] = useState(false)
  const [invalidcoupon, setInvalidcoupon] = useState(false)
  
  // const [savedmoney, setSavedmoney] = useState()
  const [refundid, setRefundid] = useState()
  const [name, setName] = useState()

useEffect(()=>{
  setSavedmoney(false)
},[])


 

useEffect(()=>{
  setTotalafdis(total)
},[])
  useEffect(() => {
    if (itemCount < 1) {
      history.push('/dashboard');
    }

  }, [itemCount]);

  const handleShipping = evt => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value
    });
  };

   
const submitcoupon = (e) => {
  e.preventDefault()
  if(coupon==discount){
    const totalafterdis = total - (Math.round((total*10)/100)) 
    setTotalafdis(totalafterdis)
    setSavedmoney((Math.round((total*10)/100)))
    setInvalidcoupon(false)
  }else{
        setInvalidcoupon(true)
        setSavedmoney(false)
  }
}

  const handleBilling = evt => {
    const { name, value } = evt.target;
    setBillingAddress({
      ...shippingAddress,
      [name]: value
    });
  }


  async function displayRazorpay(e) {
    e.preventDefault();
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}
     
  
    const amounttt=totalafdis;

		const data = await fetch('https://us-central1-ecommerce-64135.cloudfunctions.net/api/razorpay', { 
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify({ amounttt })

         }).then((t) =>
			t.json()
		) 

		// console.log(data)

    // const data = apiInstance.post('/razorpay', {
    //   newamount: JSON.stringify({ amounttt })
    // })

		const options = {
			key: __DEV__ ? 'rzp_test_sxMLHxxJqzpodO' : 'rzp_test_sxMLHxxJqzpodO',
			currency: data.currency,
			amount: data.amount,
			order_id: data.id,
			name: 'Donation',
			description: 'Thank you for nothing. Please give us some money',
			handler: function (response) {
				// alert(response.razorpay_payment_id)
				// alert(response.razorpay_order_id)
				// alert(response.razorpay_signature)
        const configOrder = {
          orderTotal: totalafdis,
          orderItems: cartItems.map(item => {
            const { documentID, productThumbnail, productName,
              productPrice, quantity } = item;

            return {
              documentID,
              productThumbnail,
              productName,
              productPrice,
              quantity
            };
          })
        }
        dispatch(
          saveOrderHistory({...configOrder,email,phone,shippingAddress})
        );
        history.push('/dashboard');
			},
		
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}

  const handleFormSubmit = async evt => {
    evt.preventDefault();
    const cardElement = elements.getElement('card');

    if (
      !shippingAddress.line1 || !shippingAddress.city ||
      !shippingAddress.state || !shippingAddress.postal_code ||
      !shippingAddress.country ||
      !recipientName || !nameOnCard
    ) {
      return;
    }

    apiInstance.post('/payments/create', {
      amount: totalafdis * 100,
      shipping: {
        name: recipientName,
        address: {
          ...shippingAddress
        }
      }
    }).then(({ data: clientSecret }) => {

      stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: nameOnCard,
          address: {
            ...shippingAddress
          }
        }
      }).then(({ paymentMethod }) => {

        stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id
        })
        .then(({ paymentIntent }) => {

          const configOrder = {
            orderTotal: totalafdis,
            orderItems: cartItems.map(item => {
              const { documentID, productThumbnail, productName,
                productPrice, quantity } = item;

              return {
                documentID,
                productThumbnail,
                productName,
                productPrice,
                quantity
              };
            })
          }

          dispatch(
            saveOrderHistory({...configOrder,email,phone})
          );
        });

      })


    });

  };

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        fontSize: '16px'
      }
    },
    hidePostalCode: true
  };

  return (
    <div>
    <div className="paymentdetails">
       <form onSubmit={displayRazorpay} className="checkoutform">
          <div className="shipping">
                <div className="shippingtitle">
                  Shipping address
                </div>
                <div className="shippingdata">
                    <div className="firstline">
                        <div className="first">
                        <div className="adressinputtitle">
                          Postal/Zip Code
                        </div>
                            <FormInput
                                  required
                                  placeholder="Postal Code"
                                  name="postal_code"
                                  handleChange={evt => handleShipping(evt)}
                                  value={shippingAddress.postal_code}
                                  type="text"
                            />
                        </div>
                        <div className="second">
                        <div className="adressinputtitle">
                          Country
                        </div>
                        <div className="formRow checkoutInput">
                            <CountryDropdown
                                required
                                onChange={val => handleShipping({
                                  target: {
                                    name: 'country',
                                    value: val
                                  }
                                })}
                                value={shippingAddress.country}
                                valueType="short"
                              />
                            </div>
                        </div>
                    </div>
                    <div className="firstline">
                      <div className="first">
                        <div className="adressinputtitle">
                          Firstname
                        </div>
                      <FormInput
                          required
                          placeholder="Recipient Name"
                          name="recipientName"
                          handleChange={evt => setRecipientName(evt.target.value)}
                          value={recipientName}
                          type="text"
                        />
                      </div>
                      <div className="second">
                      <div className="adressinputtitle">
                          Secondname
                        </div>
                      <FormInput
                          required
                          placeholder="Recipient Name"
                          name="recipientName"
                          handleChange={evt => setRecipientLastName(evt.target.value)}
                          value={recipientLastName}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="thirdline">
                        <div className="thirdlinelength">
                        <div className="adressinputtitle">
                                Address
                        </div>
                        <div className="thirdlineinput">
                        <FormInput
                            required
                            placeholder="address"
                            name="line1"
                            handleChange={evt => handleShipping(evt)}
                            value={shippingAddress.line1}
                            type="text"
                          />
                        </div>
                        
                        </div>
                    </div>
                    <div className="firstline">
                        <div className="first">
                        <div className="adressinputtitle">
                              State
                        </div>
                        <FormInput
                            required
                            placeholder="State"
                            name="state"
                            handleChange={evt => handleShipping(evt)}
                            value={shippingAddress.state}
                            type="text"
                          />
                        </div>
                        <div className="second">
                        <div className="adressinputtitle">
                              City
                        </div>
                        <FormInput
                            required
                            placeholder="City"
                            name="city"
                            handleChange={evt => handleShipping(evt)}
                            value={shippingAddress.city}
                            type="text"
                          />
                        </div>
                    </div>
                    <div className="firstline">
                    <div className="first">
                        <div className="adressinputtitle">
                              Phone Number
                        </div>
                        <FormInput
                            required
                            placeholder="Phone"
                            name="phone"
                            handleChange={evt => setPhone(evt.target.value)}
                            value={phone}
                            type="text"
                          />
                        </div>
                        <div className="second">
                        <div className="adressinputtitle">
                              Email
                        </div>
                        <FormInput
                            required
                            placeholder="Email"
                            name="email"
                            handleChange={evt => setEmail(evt.target.value)}
                            value={email}
                            type="text"
                          />
                        </div>
                    </div>
                </div>
                <div className="">
          
                </div>
            </div>
        
          {/* <div className="paymentform">
          <div className="group">
           <h2>
         Card Details
         </h2>
         <div className="adressinputtitle">
             Name on Card
           </div>
         <div className="namecardinput">
           
         <FormInput
            required
            placeholder="Name on Card"
            name="nameOnCard"
            handleChange={evt => setNameOnCard(evt.target.value)}
            value={nameOnCard}
            type="text"
          />
         </div>
         <div className="adressinputtitle">
             Card Number
           </div>

        <div className="cardelement">
        <CardElement
                  options={configCardElement}
                />
        </div>
        </div>
          </div> */}
          <div>
                                          
          
          </div>
  
          <Button className="paymentbtn" type="submit">
            Pay With Razorpay
          </Button>
       
       </form>


       {/* raxorpay */}

       {/* <form action="#" onSubmit={displayRazorpay}>
        <input 
        type='text'
        placeholder='Full Name'
        value={name}
        onChange={e=>setName(e.target.value)}
        />
        <input 
        type='email'
        placeholder='Email Address'
        value={email}
        // onChange={e=>this.setState({email:e.target.value})}
        />
          <input
            type="number"
            value={totalafdis}
            placeholder="Amount in INR"
            onChange={e => this.setState({ payment_amount: e.target.value })}
          />
          <button type="submit">Pay Now</button>
        </form> */}



        {/* raxorpay  */}

    
        
        <div className="cartdata">
            <div className="cartitemdata">
                        {cartItems.map((item, pos) => {
                                return (
                                  <tr key={pos}>
                                    <td>
                                      
                                      <Paymentitems {...item} />
                                    </td>
                                  </tr>
                                );
                              })}
            </div>
            <div className="line">
              
            </div>
            <div className="cartcoupon"> 

              <form className="couponform" onSubmit={submitcoupon}>
              <div className="couponinput">
                  <FormInput
                            required
                            placeholder="coupon code"
                            name="coupon cod"
                            handleChange={evt => setCoupon(evt.target.value)}
                            value={coupon}
                            type="text"
                          />
              </div>
              
              <div className="couponsection">
                      <Button className="couponbtn" type='submit' >
                        Apply
                      </Button>
              </div>
                </form>      
            </div>
            <div 
            className={savedmoney? "couponapplied":"couponapp"}>coupon applied!</div>
            <div 
            className={invalidcoupon? "invalidcouponapplied":"invalidcouponapp"}>invalid coupon applied!</div>
            <div className="line">
              
              </div>
            <div className="cartordersummary">
                   <div className="subtotal">
                      <div className="">
                              Subtotal
                        </div>
                        <div className="">
                        ₹. {total}.00
                        </div>
                   </div>
                   <div className="savedsubtotal">
                      <div className="">
                              Saved
                        </div>
                        <div className="savedline">
                        ₹. {total}.00
                        </div>
                   </div>
                   <div className="shipping">
                      <div className="">
                              shipping
                        </div>
                        <div className="">
                         Free
                        </div>
                   </div>
            </div>
            <div className="line">
              
              </div>
            <div className="paymenttotal">
                <div className="">
                        Total
                </div>
                <div className={savedmoney?"savedmoneyactive":"savedmoney"}>
                        You saved ₹. {savedmoney} 
                </div>
                <div className="">
                ₹. {totalafdis}.00
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default PaymentDetails;