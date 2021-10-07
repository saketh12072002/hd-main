import React from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from '../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '../../forms/Button/Button'
import AddIcon from '@material-ui/icons/Add';

function Simslider2(similiar3) {
    const {similiarProduct3Name,similiarProduct3id,similiarProduct3image,similiarProduct3Price} = similiar3
    const dispatch = useDispatch();
    const history = useHistory();


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
                <Link to={`/product/${similiarProduct3id}`}>
                <img src={similiarProduct3image} alt={similiarProduct3Name} />
                </Link>
            </div>
            
            <div className="detailss">
                
                    <div className="nameslider">
                        <Link to={`/product/${similiarProduct3id}`}>
                        
                            {similiarProduct3Name}
                        
                        </Link>
                    </div>
                    <div>
                        <span className="price">
                            {similiarProduct3Price}
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

export default Simslider2
