import React,{useEffect,useState} from 'react'
import './styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsStart, fetchProductStart,fetchProductsStartSize,fetchProductsStartBrand,fetchProductsStartDresstype} from './../../redux/Products/products.actions'
import Product from './Product/Product'
import FormSelect from './../forms/FormSelect/FormSelect'
import {useHistory,useParams} from 'react-router-dom'
import LoadMore from './../LoadMore/LoadMore'
import Footer from '../Footer/Footer'


const mapState = ({ productsData }) => ({
    products: productsData.products
  });
  
  const ProductResults = ({ }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { filterSize } = useParams();
    const { filterBrand } = useParams();
    const { filterDresstype } = useParams();
    const { products } = useSelector(mapState);
    // const [nextSize, setNextSize] = useState()
    
   
    const { data, queryDoc, isLastPage } = products;
  

    useEffect(() => {
      dispatch(
        fetchProductsStartDresstype({ filterDresstype})
      )
    }, [filterDresstype]);

    useEffect(() => {
      dispatch(
        fetchProductsStart({ filterType})
      )
    }, [filterType]);

    useEffect(() => {
      dispatch(
        fetchProductsStartSize({filterSize})
      )
    }, [filterSize]);

    useEffect(() => {
      dispatch(
        fetchProductsStartBrand({filterBrand})
      )
    }, [filterBrand]);
  
    
    const handleFilterDresstype = (e) => {
      const nextDressfilter = e.target.value;
      history.push(`/search/dresstype/${nextDressfilter}`);
      
    };

    const handleFilter = (e) => {
      const nextFilter = e.target.value;
      // const nextSize = "XL";
      const nextBrand = "Haberdasher"
      const nextDressfilter = "kurta"
      history.push(`/search/${nextFilter}`);
      
    };
    
    const handleFilterSize = (e) => {
      const nextSize = e.target.value;
      // setNextSize(e.target.value)
      history.push(`/search/size/${nextSize}`);
      
    };

    const handleFilterBrand = (e) => {
      const nextBrand= e.target.value;
      history.push(`/search/brand/${nextBrand}`);
      
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

    
  
    const configFilters = {
      defaultValue: filterType,
      options: [{
        name: 'Show all',
        value: ''
      }, {
        name: 'Mens',
        value: 'mens'
      }, {
        name: 'Womens',
        value: 'womens'
      }], 
      handleChange: handleFilter
    };

    const configDresstypeFilters = {
      defaultValue: filterDresstype,
      options: [{
        name: 'Show all',
        value: ''
      }, {
        name: 'kurta',
        value: 'kurta'
      }, {
        name: 'shirt',
        value: 'shirt'
      }], 
      handleChange: handleFilterDresstype
    };
     
    const configsizeFilters = {
      defaultValue: filterSize,
      options:[{
        value: "L",
        name: "L"
      }, {
        value: "S",
        name: "S"
      },
      {
        value: "XL",
        name: "XL"
      }, {
        value: "XXL",
        name: "XXL"
      }],
      handleChange: handleFilterSize
    };
   
    
    
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

    

    
    const handleLoadMore = () => {
      dispatch(
        fetchProductsStart({
          
          startAfterDoc: queryDoc,
          persistProducts: data
        })
      )
    };
  
    const configLoadMore = {
      onLoadMoreEvt: handleLoadMore,
    };
  
    return (
      <div className="products">

        
        <div className="producttitle">
            {filterType}
            {filterBrand}
            {filterDresstype}
        </div>
        <div className="image">
   
        </div>  

        <h1>
          {/* shirts & suits */}
        </h1>

        
      <div className="forms">
        <div className="first">
          
          <div className="firtform">
            <h5>Gender</h5>
          <FormSelect className="firstform" {...configFilters} />  
          </div> 
          {/* <div className="">
          <FormSelect className="firstform" {...configsizeFilters} />
          </div>  */}
          <div className="">
          <h5>Brand</h5>
          <FormSelect className="firstform" {...configsortFilters} />
          </div> 
          <div className="">
          <h5>Category</h5>
          <FormSelect className="firstform" {...configDresstypeFilters} />
          </div>
        </div>

        <div className="productline">
          
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
  
        {!isLastPage && (
          <LoadMore {...configLoadMore} />
        )}

        {/* <Footer /> */}
      </div>
    );
  };
  
export default ProductResults
