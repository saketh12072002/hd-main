import React from 'react'
import './styles.scss'

function Paymentitems(product) {

    const {
        productName,
        productThumbnail,
        productPrice,
        quantity,
        documentID,
        productSize,
        discountPrice
      
        
      } = product;
    return (
        <div className="paymentcartitem">
            <div className="paymentcartitemimage">
                <img src={productThumbnail} />
            </div>
            <div className="paymentcartitemdetails">
                
                <div className="">
                {productName}
                </div>
                <div className="">
                    Size:L
                </div>
                <div className="">
                        Qty.{quantity}
                </div>
                
            </div>
            <div className="paymentcartitemprice">
            ₹.{productPrice}.00
            </div>
            

            
        </div>
    )
}

export default Paymentitems
