import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from '../../../redux/Cart/cart.actions';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FormSelect from './../../forms/FormSelect/FormSelect'

const Item = (product) => {
  const dispatch = useDispatch();


  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID,
    productSize,
  
    
  } = product;

  console.log(product)

    

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

 

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      {/* <tbody>
        <tr> 
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td className="productName">
            {productName}
          </td>
          <td className="quantity">
            <span className="cartBtn1"
              onClick={() => handleReduceItem(product)}>
              <RemoveCircleIcon />
            </span>
            <span className="quant">
              {quantity}
            </span>
            <span className="cartBtn2"
              onClick={() => handleAddProduct(product)}>
              <AddCircleIcon />
            </span>
          </td>
          <td className="price">
            Rs{productPrice}
          </td>
         
          
          
          <td align="center">
            <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>
              <DeleteIcon className="deleteIcon" />
            </span>
          </td>
        </tr>
      </tbody> */}
    
    <div className="cartContainer">
     

      <div className="details">

        <div className="orderDetails">
          {/* <div className="orderDetailsheading">
              order Details - {} item(s)
          </div> */}
          <div className="orderinfo">
              <div className="orderimage">
                  <img src={productThumbnail} alt={productName} />
              </div>
              <div className="orderproductdetails">
                  <div className="ordercardtitle">
                      {productName}
                  </div>
                  <div className="ordercardtype">
                        Silk sherwani set
                  </div>
                  <div className="orderproductcolour">
                        Color: Maroon
                  </div>
                  <div className="orderproductsize">
                        Size: {productSize}
                  </div>
                  <div className="orderproductprice">
                  ₹ Price: {productPrice}
                  </div>
                  <div className="ordershippingdate">
                      Estimated shipping date: 34th feb, 2021
                  </div>
                  
                  {/* <span className="cartBtn remove" onClick={() => handleRemoveCartItem(documentID)}>
                    <DeleteIcon className="deleteIcon" />
                  </span> */}
                  
              </div>
              <div className="orderincdec">
                  <span className="cartBtn1"
                      onClick={() => handleReduceItem(product)}>
                      <RemoveCircleIcon />
                    </span>
                    <span className="quant">
                      {quantity}
                    </span>
                    <span className="cartBtn2"
                      onClick={() => handleAddProduct(product)}>
                      <AddCircleIcon />
                    </span>
                  </div>
              
              
          </div>
          <div className="itembuttons">
                  <div className="itembuttonsremove" onClick={() => handleRemoveCartItem(documentID)}>
                    Remove 
                  </div>
                  <div className="line">

                  </div>
                  <div className="wishlistremove">
                    Wishlist 
                  </div>
              </div>

          {/* <div className="placeorderbut">
              <div className="ordercoupons">
                  Complete this order and get 4800 loyalty points. Know more<br /><br />
                  Add ₹ 27,005 to get Extra 10 % off. Use coupon: SUPERSAVER.
              </div>
              <div className="placeorderbutton">

              </div>

          </div> */}
        </div>

        {/* <div className="priceDetails">
            <div className="priceproductdetials">
                <div className="priceproductdetialstitle">
                    Price Details
                </div>
                <div className="priceproductdetialsbag">
                    <div className="pricedetialsbagtitle">
                          Bag Total
                    </div>
                    <div className="pricedetialsbagprice">
                          $ 23,334
                    </div>
                </div>
                <div className="priceproductdetialsshipping">
                    <div className="pricedetialsshiping">
                        Shipping Charges
                    </div>
                    <div className="pricedetialsshipingmoney">
                        $10
                    </div>
                </div>
                <div className="priceproductdetialstax">
                    <div className="pricedetialstax">
                          GST
                    </div>
                    <div className="pricedetialstaxmoney">
                            $231
                    </div>
                </div>
                <div className="priceproductdetialstotal">
                    <div className="pricedetialsordetotal">
                          Order Total
                    </div>
                    <div className="pricedetialsordetotalprice">
                          $ 23,334
                    </div>
                </div>  
                
                
            </div>
            <div className="placeorderbutton">

            </div>
        </div> */}

      </div>

    </div>
    </table>
  );
}

export default Item;