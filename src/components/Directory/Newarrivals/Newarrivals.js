import React from 'react'
import './newstyles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from './../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from './../../forms/Button/Button'

function Newarrivals(product) {

    const dispatch = useDispatch();
    const history = useHistory();
    const {
            documentID,
            productThumbnail,
            productName,
            productPrice,
            productSize,
            discountproductPrice
        
    } = product;

    const handleAddToCart = (product) => {
        // if (!product) return;
        console.log(product)
        dispatch(
            addProduct(product)
        );
       
    }

    const configAddToCardBtn ={
        type:'button'
    }

    return (

        <div className="product">
            <div className="thumb">
                <Link to={`/product/${documentID}`}>
                <img src={productThumbnail} alt={productName} />
                </Link>
            </div>
            
            <div className="detailss">
                <ul>
                    <li className="name">
                        <Link to={`/product/${documentID}`}>
                        <span>
                         {productName}
                        </span>
                        </Link>
                    </li>
                    <li className="productname">
                        <Link to={`/product/${documentID}`}>
                        <span>
                        Suzani Grey Blue Applique Gathered Kurta Set
                        </span>
                        </Link>
                    </li>
                    <li>
                        <div className="line">

                        </div>
                    </li>
                    
                    <li>
                        <span className="price">
                            <div className="pricee">
                               Rs. 20,200.00
                            </div>
                            <div className="discount" >
                                {/* {discountproductPrice} */} Rs. 23,342.00
                            </div>
                             
                        </span>
                    </li>
                    
                    
                </ul>
                    <div >
                        <Button  className="addToCart" {...configAddToCardBtn} onClick={()=>handleAddToCart(product)}>
                            add to cart
                        </Button>
                    </div>

            </div>
        </div>
    )
}

export default Newarrivals
