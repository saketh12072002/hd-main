import React,{useState,useEffect} from 'react';
import Button from './../../../components/forms/Button/Button'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from './../../../redux/Cart/cart.actions'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {motion} from 'framer-motion'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {addProducttoWishlist} from './../../../redux/Wishlist/wishlist.actions'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import {fetchDesignerStart} from './../../../redux/Designer/designers.actions'



function Product({product,handleprop,data}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [popcart, setPopcart] =useState(false)
    const [wishcol, setWishcol] =useState(false)
    const {
            documentID,
            productThumbnail,
            productName,
            productPrice,
            productSize,
            brandName,
            discountproductPrice
        
    } = product;

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
       
    }

    const fetchDesigner = () =>{
        dispatch(
            fetchDesignerStart({brandName})
          )
    }


    const handleAddToWishlist = (product) => {
        if (!product) return;
        handleprop()
        setPopcart(!popcart)
        dispatch(
            addProducttoWishlist(product)
        );
    } 


    if(!documentID || !productThumbnail || !productName ||
        typeof productPrice === 'undefined') return null;


    const configAddToCardBtn = {
        type:'button'
    }


   

    return (
        <motion.div className="productsection"
        initial={{y:200}}
        animate={{y:0}}
        transition={{ type:'spring',duration:1}}
            
            >
            

            <div className="sale">
            <Link to={`/product/${documentID}`}>
                    view
                    </Link>
            </div>
            <div className="thumb">
                <Link to={`/product/${documentID}`}>
                    <img src={productThumbnail}  alt={productName} />
                </Link>
            </div>
       
            
            <div className="details">
                <ul>
                    <li>
                        <span className="brandname">
                            <Link to={`/designer/${brandName}`}>
                                <div onClick={()=>{fetchDesigner()}}>{brandName}</div>
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
                            
                            <span className="pricee">
                            ₹ {productPrice}
                        </span>
                            <span className="discountprice">
                            ₹ {discountproductPrice}
                        </span>
                        </span>
                        
                    </li>
                    <li>
                        
                    </li>
                    
                    
                </ul>
                    <div className="pop" >
                        <BookmarkIcon className={popcart? "iconcol":"iconcoler"} onClick={()=>handleAddToWishlist(product)} />
                      
                        
                    </div>

                    

            </div>
            
        </motion.div>
    )
}

export default Product
