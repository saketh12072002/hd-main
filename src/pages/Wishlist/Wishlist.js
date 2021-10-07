import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import {selectWishlistItems} from './../../redux/Wishlist/wishlist.selector'
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Wishitem from './Wishitem/Wishitem';




const mapState = createStructuredSelector({
    wishllistItems: selectWishlistItems,
  });
  

function Wishlist() {
    const { wishllistItems } = useSelector(mapState);
    return (
        <div className="wishlist">
             <div className="wishheader">
                My Wishlist <span>{wishllistItems.length}</span> items
            </div>
            
            <div className="wishitems">
                
                {wishllistItems.map((wishitem,pos)=>{
                return(
                    <Wishitem {...wishitem} />
                )
                })}
            </div>
            


        </div>
    )
}

export default Wishlist
