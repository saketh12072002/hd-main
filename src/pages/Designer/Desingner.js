import React,{useState,useEffect} from 'react'
import './styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsStart, fetchProductStart,fetchProductsStartSize,fetchProductsStartBrand,fetchProductsStartDresstype} from './../../redux/Products/products.actions'
import Product from './../../components/ProductResults/Product/Product'
import FormSelect from './../../components/forms/FormSelect/FormSelect'
import {useHistory,useParams} from 'react-router-dom'
import LoadMore from './../../components/LoadMore/LoadMore'

const mapState = ({ productsData }) => ({
    products: productsData.products
  });

function Desingner() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { filterBrand } = useParams();
    
    const { products } = useSelector(mapState);
    const { data, queryDoc, isLastPage } = products;
    console.log("asdd")
    // console.log(data[0].brandimage)
    const [img, setImg] =  useState()
    
    
    

    
    // useEffect(async () => {
    //     const dataitem = await data[0];
    //     setImg(dataitem.brandimage)

    //   }, [products]);


    useEffect(() => {
        dispatch(
          fetchProductsStartBrand({filterBrand})
        )
        // history.push(`/designer/${filterBrand}`)

      }, [filterBrand]);

      const handleFilterBrand = (e) => {
        const nextBrand= e.target.value;
        history.push(`/designer/${nextBrand}`);
        
      };
    //   try {
    //     if(!data) {
    //         return ;
    //     }
    //     else
    //     {
    //         const imgurl = data[0].brandimage;
    //         setImg(imgurl)
    //     }
    // }catch (err){
    //     console.log(err)

    // }

      const configsortFilters = {
        defaultValue: filterBrand,
        options:[{
          value: "Brand",
          name: "Brand"
        },{
          value: "108",
          name: "108"
        }, {
          value: "Haberdasher",
          name: "Haberdasher"
        },
        {
          value: "108",
          name: "108"
        }, {
          value: "Haberdasher",
          name: "Haberdasher"
        }],
        handleChange: handleFilterBrand
      };

            if (!Array.isArray(data)) return null;
            if (data.length < 1) {
            return (
                <div className="products">
                <p>
                    No search results.
                </p>
                </div>
            );
            }

    return (
        <div className="productsss">
            
            <div className="desingerimage">
            <div className="brandname">Haberdasher</div>
                <img src={img} />

            </div>

        
      <div className="forms">
        {/* <div className="first">
          <div className="">
          <h5>Brand</h5>
          <FormSelect className="firstform" {...configsortFilters} />
          </div> 
        </div> */}

        <div className="productline">
          
        </div>
    
        
        <div className="productstitles">
          PRODUCTS
        </div>
        <div className="productResults">
          {data.map((product, pos) => {
            const { productThumbnail, productName, productPrice } = product;
            if (!productThumbnail || !productName ||
              typeof productPrice === 'undefined') return null;
  
            const configProduct = {
              ...product
            };
  
            return (
              <Product key={pos} {...configProduct} />
            );
          })}
        </div>
        </div>
  
        {/* {!isLastPage && (
          <LoadMore {...configLoadMore} />
        )} */}

        {/* <Footer /> */}
      </div>
    )
}

export default Desingner
