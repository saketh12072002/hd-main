import React,{useEffect,useState} from 'react'
import './styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsStart, fetchProductStart,fetchProductsStartColour,fetchProductsStartSize,fetchProductsStartBrand,fetchProductsStartDresstype,fetchProductsQueryStart} from './../../redux/Products/products.actions'
import {fetchDesignerStart} from './../../redux/Designer/designers.actions'
import Product from './Product/Product'
import FormSelect from './../forms/FormSelect/FormSelect'
import {useHistory,useParams} from 'react-router-dom'
import LoadMore from './../LoadMore/LoadMore'
import Footer from '../Footer/Footer'
import Formradio from '../forms/Formradio/Formradio'
import {motion} from 'framer-motion'
import { Parallax } from 'react-parallax'
import { user } from 'firebase-functions/lib/providers/auth'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';


  
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
    const { filterColour } = useParams();
    const { products } = useSelector(mapState);
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const [popcart, setPopcart] =useState(false)
    
    console.log('uytrgsfsdf')
    console.log(products)
    useEffect(()=>{
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    },[])

    const gender = "mens"
    const sizes = "L"
   
    const { data, queryDoc, isLastPage } = products;
    console.log('data')
    console.log(data)
  
    useEffect(() => {
      dispatch(
        fetchProductsQueryStart({gender,sizes})
      )
    }, []);

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

    useEffect(() => {
      dispatch(
        fetchProductsStartColour({filterColour})
      )
    }, [filterColour]);


   
    const filterQuery = ''
  
    
    const popcartfun =()=>{
      setTimeout(() => {
          setPopcart(false)
        }, 2000);
  }

    
  const handleprop =()=>{
    setPopcart(true)
    popcartfun()
  }
    
    const handleFilterDresstype = (e) => {
      const nextDressfilter = e.target.value; 
      history.push(`/search/dresstype/${nextDressfilter}`);
      
    };

    const handleFiltertype = (e) => {
      const nextType = e.target.value; 
      history.push(`/search/${nextType}`);
      
    };
    
    const handleFilterSize = (e) => {
      const nextSize = e.target.value;
      history.push(`/search/size/${nextSize}`);
      
    };

    const handleFilterBrand = (e) => {
      const nextBrand= e.target.value;
      history.push(`/search/brand/${nextBrand}`); 
    };

    const handleFilterColour = (e) => {
      const nextColour= e.target.value;
      history.push(`/search/color/${nextColour}`); 
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
      handleChange: handleFiltertype
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
      },
      {
        name: 'bandi',
        value: 'bandi'
      }, {
        name: 'kurta',
        value: 'kurta'
      }, {
        name: 'trouser',
        value: 'trouser'
      },{
        name: 'sherwani',
        value: 'sherwani'
      }, {
        name: 'suit',
        value: 'suit'
      }, {
        name: 'three piece',
        value: 'three piece'
      },{
        name: 'ties',
        value: 'ties'
      }, {
        name: 'dhothi',
        value: 'dhothi'
      }, {
        name: 'shirt',
        value: 'shirt'
      }], 
      handleChange:  handleFilterDresstype
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
        value: "Anvshn",
        name: "Anvshn"
      },{
        value: "108",
        name: "108"
      }, {
        value: "The%20Haberdasher%20Co",
        name: "The Haberdasher Co"
      },
      {
        value: "Sharath Dasari",
        name: "Sharath Dasari"
      }, {
        value: "Richa Panwar",
        name: "Richa panwar"
      },{
        value: "Raj shekhar",
        name: "Raj shekhar"
      }],
      handleChange: handleFilterBrand
    };

    const configsortColour = {
      defaultValue: filterColour,
      options:[{
        value: "Rs. 314 to Rs. 2673",
        name: "Rs. 314 to Rs. 2673"
      },{
        value: "Rs. 2673 to Rs. 5032",
        name: "Rs. 2673 to Rs. 5032"
      }, {
        value: "Rs. 5032 to Rs. 7391",
        name: "Rs. 5032 to Rs. 7391"
      },
      {
        value: "Rs. 7391 to Rs. 9750",
        name: "Rs. 7391 to Rs. 9750"
      },],
      handleChange: handleFilterColour
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

    const bgimg ="https://cdn.shopify.com/s/files/1/0752/6435/files/SPECIAL_PRICES_e36d7312-d449-4bcd-9046-3dcf0f97f94e.jpg?v=1620109269";
  
    return (


      <div className="products" >
        <div className="maincategoryimage">
          <Parallax bgImage={bgimg} strength={200}>
           <div style={{height:300}}>
           </div>
          </Parallax>
            {/* <img src="https://cdn.shopify.com/s/files/1/0752/6435/files/RMB6.jpg?v=1620108726" /> */}
        </div>
        

        
        <div className="producttitle">
          {/* <div className="filterbar">
             <div className="">
              {filterType}, <span>Showing ({products.data.length}) results</span>
             </div>
          </div> */}
          <div className="">
            {filterBrand}
          </div>
          
          <div className="">
            {filterDresstype}
          </div>
           
            
           
        </div>
        <div className="image">
   
        </div>  
        
      <div className="forms" >
        
        <motion.div className="filtersection"
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.2}}
          >
        <div className="filerstitle">FILTERS</div>
        

          <h5>By Brand</h5>
          
          <div className="brandfilter">
            
            <Formradio className="firstform" {...configsortFilters} />
          </div> 
          <h5>By Gender</h5>
          <div className="genderfilter">
            
            <Formradio className="firstform" {...configFilters} />  

          </div>  
          <div className="gap"></div>
          <h5>By Category</h5>
          <div className="catfilter">
           
            <Formradio className="firstform" {...configDresstypeFilters} />
          </div>

          <h5>By Colour</h5>
          <div className="catfilter">
           
            <Formradio className="firstform" {...configsortColour} />
          </div>
        </motion.div>
        

        <div className="productline">
          
        </div>
        
    
        
  
        <motion.div className="productResults"
        >
          {data.map((product, pos) => {
            const { productThumbnail, productName, productPrice } = product;
            if (!productThumbnail || !productName ||
              typeof productPrice === 'undefined') return null;
  
          
  
            return (
              <Product key={pos} product={product} handleprop={handleprop} />
            );
          })}
        </motion.div>
        </div>
  
        {!isLastPage && (
          <LoadMore {...configLoadMore} />
        )}

        {/* <Footer /> */}
    
      </div>
    );
  };
  
export default ProductResults
