import React from 'react';
import './styles.scss'
import Paymentdetails from '../../components/Paymentdetails/Paymentdetails';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { publishableKey } from './../../stripe/config';
import Headerthree from '../../components/headerthree/Headerthree';
import Footer from '../../components/Footer/Footer';

const stripePromise = loadStripe(publishableKey);

const Payment = () => {
  return (
    
    <div className="paymentlayout">
          <Elements stripe={stripePromise}>
      <Headerthree />
      <Paymentdetails />
    </Elements>
    <div className="verifiedfooter">
        <div className="cardimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"/>
        </div>
        <div className="cardimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"/>
        </div>
        <div className="cardimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"/>
        </div>
        <div className="cardimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"/>
        </div>
        <div className="cardimages">
          <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"/>
        </div>
       
    </div>
    </div>
  );
}

export default Payment;