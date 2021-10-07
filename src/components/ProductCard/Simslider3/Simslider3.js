import React from 'react'
import './styles.scss'
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addProduct} from '../../../redux/Cart/cart.actions'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Button from '../../forms/Button/Button'
import AddIcon from '@material-ui/icons/Add';

function Simslider3(similiar4) {

    const dispatch = useDispatch();
    const history = useHistory();
 const {similiarProduct4Name,similiarProduct4id,similiarProduct4image,similiarProduct4Price} = similiar4


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
                <Link to={`/product/${similiarProduct4id}`}>
                <img src={similiarProduct4image} alt={similiarProduct4Name} />
                </Link>
            </div>
            
            <div className="detailss">
                
                    <div className="nameslider">
                        <Link to={`/product/${similiarProduct4id}`}>
                         
                            {similiarProduct4Name}
                        
                        </Link>
                    </div>
                    <div>
                        <span className="price">
                            {similiarProduct4Price}
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

export default Simslider3
