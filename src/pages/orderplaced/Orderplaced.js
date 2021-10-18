import React from 'react';
import './styles.css';
import check from './check.gif';


function Orderplaced() {
  return (
    <div className="container">
<div className="d-flex flex-column">
  <div className="imge">
     <img src={ check }  />
  </div>
  <div className="p-2">
    <p className="sed">Order Placed</p>
    
  <p className="matt">Your order is placed successfully. You will be recieving a conformation email shortly</p>
  </div>
  <div className="p-3">
    <h4>Order Details :</h4>
    <p><b>Order ID: xxxx-xxxx-xxxx-xxxx</b></p>
    <a class="link" href="src\pages\ProductDetails\ProductDetails.js">Go to your order</a></div>
    <div className="buttonop">
      <p className="trans">*This is a Secure Transaction</p>
      <button onClick="#"><h5>Continue Shopping</h5></button>
    </div>
</div>
</div>
  );
}

export default Orderplaced
