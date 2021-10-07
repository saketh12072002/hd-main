
import React from 'react'
import { useDispatch } from 'react-redux';
import Button from '../../../components/forms/Button/Button';
import './styles.scss'
import {addProduct} from './../../../redux/Cart/cart.actions'
import {removeWishlistItemFromWishlist} from './../../../redux/Wishlist/wishlist.actions'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Wishitem(product) {
    const dispatch = useDispatch();
    const {
        productName,
        productThumbnail,
        productPrice,   
        quantity,
        documentID,
        productSize,
        discountproductPrice,
      } = product;

      const discounted = Math.floor(((discountproductPrice*100)/productPrice))

      const handleRemovewishItem = (documentID) => {
        dispatch(
        removeWishlistItemFromWishlist({
            documentID
          })
        );
      }

      const handleAddProduct = (product) => {
        dispatch(
          addProduct(product)
        )
      }

    return (
        <div className="wishitemcard">
           
            <div className="wishitemcardlayout">
                <div className="wishclose" onClick={() => handleRemovewishItem(documentID)}><HighlightOffIcon/></div>
                <div className="wishitemimg">
                    <img src={productThumbnail} />
                </div>
                <div className="wishcontent">
                    <div className="wishname">
                            {productName}
                    </div>
                    <div className="wishprices">
                        <div className="wishpri">
                    
                        ₹.{discountproductPrice}
                        </div>    
                        <div className="wishdis">
                        ₹.{productPrice}
                        </div>
                        <div className="wishper">
                            ({discounted}% OFF)
                        </div>
                    </div>
                </div>
                <div className="wishbttn">
                        <Button className="wishbtn" onClick={()=>handleAddProduct(product)}>
                            add to bag
                        </Button>
                    </div>
            </div>
            {/* <button onClick={() => handleRemovewishItem(documentID)}>
                delete
            </button> */}
        </div>
    )
}

export default Wishitem
