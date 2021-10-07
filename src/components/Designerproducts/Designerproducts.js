import React,{useState} from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProducttoWishlist} from './../../redux/Wishlist/wishlist.actions'
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Designerproducts(product) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [click,setClick] = useState(false)
    const [popcart, setPopcart] =useState(false)

    const handleAddToWishlist = (product) => {
        if (!product) return;
      
        setPopcart(!popcart)
        dispatch(
            addProducttoWishlist(product)
        );
    } 

    const {
        documentID,
        productThumbnail,
        productName,
        productPrice,
        productSize,
        brandName,
        brandimage
            } = product;

            if(!documentID || !productThumbnail || !productName ||
                typeof productPrice === 'undefined') return null;

              const handleClick =()=>{
                    setClick(!click)
                   
                }

    return (
        <div className="designerproducts">
            <div className="designerimageheader">
                    {/* <img src={brandimage} /> */}
            </div>
            <div className="designerproductdetails">
                <div className="designerproductdetailsflex">
                    <div className="designerproductsthumb">
                        <Link to={`/product/${documentID}`}>
                            <img src={productThumbnail}  alt={productName} />
                        </Link>
                    </div>
                
                <div className="designerproductdetailscontent">
                    
                        <div className="designerproductsbrandname">
                        
                                {brandName}
                        
                            <div className="pop" >
                            <BookmarkIcon className={popcart? "iconcol":"iconcoler"} onClick={()=>handleAddToWishlist(product)} />
                            </div>
                        </div>
                    
                        <div className="designerproductsname">
                            <Link to={`/product/${documentID}`}>
                                {productName}
                            </Link>
                        </div>

                        <div className="designerproductsprices">
                            <div className="pricee">
                                Rs.  23,200.00
                            </div>

                            <div className="discountprice">
                                Rs.  23,200.00
                            </div>
                        </div>
                </div>
                </div>
                
            </div>
        
        </div>
    )
}

export default Designerproducts
