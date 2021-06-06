import React,{useState,useEffect} from 'react';
import Button from './../../../components/forms/Button/Button'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from './../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AddIcon from '@material-ui/icons/Add';

function Product(product) {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const {
            documentID,
            productThumbnail,
            productName,
            productPrice,
            productSize,
            brandName
        
    } = product;

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
       
    }


    if(!documentID || !productThumbnail || !productName ||
        typeof productPrice === 'undefined') return null;


    const configAddToCardBtn = {
        type:'button'
    }

    // const setbg = () => {
    //     setImg({productThumbnail})
    // }

   
    const handleMouseover = () =>{
        // setImg('https://static3.azafashions.com/uploads/product_gallery/akjkpst1l1navy_1-0086102001618932927.jpg')
    }
    const handleMouseout = () =>{
        // setImg(productThumbnail)
    }

   

    return (
        <div className="product">
            <div className="thumb">
                <Link to={`/product/${documentID}`}>
                    <img src={productThumbnail}  alt={productName} />
                </Link>
                
            </div>
            
            <div className="details">
                <ul>
                    <li>
                        <span className="brandname">
                            <Link to="/haberdasher">
                                {brandName}
                            </Link>
                        </span>
                    </li>
                    <li className="name">
                        <Link to={`/product/${documentID}`}>
                        <span>
                            {productName}
                        </span>
                        </Link>
                    </li>
                    
                    <li>
                        <span className="price">
                            Rs.  {productPrice}
                        </span>
                    </li>
                    
                    
                </ul>
                    <div >
                        <Button  className="addToCart"{...configAddToCardBtn} onClick={()=>handleAddToCart(product)}>
                            <AddIcon />
                        </Button>
                    </div>

            </div>
        </div>
    )
}

export default Product
