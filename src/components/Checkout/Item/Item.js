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
  
    <div className="cartContainer">
     

      <div className="details">

        <div className="orderDetails">
        
          <div className="orderinfo">
            <div className="ordermob">
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
            </div>
            <div className="ordermob1">
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
                  <div className="wishlistbtn">
                        move to wishlist
                      </div>
                  <div className="deletebtn"onClick={() => handleRemoveCartItem(documentID)}>
                        delete
                  </div>
            </div>
          </div>
         
        </div>

      

      </div>

    </div>
    </table>
  );
}

export default Item;