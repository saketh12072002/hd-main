import React from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from './../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from './../../forms/Button/Button'
import AddIcon from '@material-ui/icons/Add';

function Simslider(similiar) {
    const {similiarProduct1Name,similiarProduct1id,similiarProduct1image,similiarProduct1Price} = similiar
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
                <Link to={`/product/${similiarProduct1id}`}>
                <img src={similiarProduct1image} alt={similiarProduct1Name} />
                </Link>
            </div>
            
            <div className="detailss">
                
                    <div className="nameslider">
                        <Link to={`/product/${similiarProduct1id}`}>
                        
                            {similiarProduct1Name}
                        
                        </Link>
                    </div>
                    <div>
                        <span className="price">
                            {similiarProduct1Price}
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

export default Simslider
