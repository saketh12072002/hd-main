import React from 'react'
import './styles.scss'
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
            productSize
        
    } = product;

    const handleAddToCart = (product) => {
        if (!product) return;
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
                    <li>
                        <span className="price">
                            {productPrice}
                        </span>
                    </li>
                    
                    
                </ul>
                    <div >
                        <Button  className="addToCart"{...configAddToCardBtn} onClick={()=>handleAddToCart(product)}>
                            <ShoppingBasketIcon />
                        </Button>
                    </div>

            </div>
        </div>
    )
}

export default Newarrivals
