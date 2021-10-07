import React from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from './../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from './../../forms/Button/Button'
import AddIcon from '@material-ui/icons/Add';

function Simslider1(similiar2) {

    const dispatch = useDispatch();
    const history = useHistory();
 const {similiarProduct2Name,similiarProduct2id,similiarProduct2image,similiarProduct2Price} = similiar2


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

        <div className="productslider">
            <div className="thumb">
                <Link to={`/product/${similiarProduct2id}`}>
                <img src={similiarProduct2image} alt={similiarProduct2Name} />
                </Link>
            </div>
            
            <div className="detailss">
                
                    <div className="nameslider">
                        <Link to={`/product/${similiarProduct2id}`}>
                         
                            {similiarProduct2Name}
                        
                        </Link>
                    </div>
                    <div>
                        <span className="price">
                            {similiarProduct2Price}
                        </span>
                    </div>
                    
                    
        
                    {/* <div >
                        <Button  className="addToCart"{...configAddToCardBtn} onClick={()=>handleAddToCart(product)}>
                            <AddIcon />
                        </Button>
                    </div> */}

            </div>
        </div>
    )
}

export default Simslider1
