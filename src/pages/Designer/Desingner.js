import React,{useState,useEffect} from 'react'
import './styles.scss'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsStart, fetchProductStart,fetchProductsStartSize,fetchProductsStartBrand,fetchProductsStartDresstype} from '../../redux/Products/products.actions'
import Product from '../../components/ProductResults/Product/Product'
import FormSelect from '../../components/forms/FormSelect/FormSelect'
import {useHistory,useParams} from 'react-router-dom'
import LoadMore from '../../components/LoadMore/LoadMore'
import Designerproducts from '../../components/Designerproducts/Designerproducts'
import Footer from '../../components/Footer/Footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Designerslider from './Designerslider/Designerslider'
import Designerslider2 from './Designerslider2/Designerslider2'
import Designerslider3 from './Designerslider3/Designerslider3'
import Formradio from '../../components/forms/Formradio/Formradio'
// import FormSelect from './../../components/forms/FormSelect/FormSelect'
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import Designerlay from './Designerlay/Designerlay'
import {fetchDesignerStart} from '../../redux/Designer/designers.actions'
import DesignersAbout from './DesignersAbout'


const mapState = ({ productsData,designersData }) => ({
    products: productsData.products,
    designers:designersData.designers
  });

function Desingner(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { filterType } = useParams();
    const { filterSize } = useParams();
    const { filterBrand } = useParams();
    const { filterDresstype } = useParams();
 
    
    const { products,designers } = useSelector(mapState);
 
    const { data, queryDoc, isLastPage } = products;
    const [filterbtn, setFilterbtn] =useState(false)
    const {datad} = designers
    
   var  settings = {
        dots: true,
        // arrow:false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 1
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 2,
                slidesToShow: 1
            }
        }, {
          breakpoint: 480,
          settings: {
              initialSlide: 2,
              slidesToShow: 1
          }
      }]
      };

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
        fetchProductsStartBrand({filterBrand}),

      )
    }, [filterBrand]);

    useEffect(() => {
    
      dispatch(
        fetchDesignerStart({filterBrand})
      )
    
    }, [filterBrand]);

   

    
    const handleFilterDresstype = (e) => {
      const nextDressfilter = e.target.value;
      history.push(`/search/dresstype/${nextDressfilter}`);
      
    };

    const handleFilter = (e) => {
      const nextFilter = e.target.value;
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

    const filterbtntol = (e) =>{
      e.preventDefault();
      setFilterbtn(!filterbtn)
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
      

            if (!Array.isArray(data)) return null;
            if (data.lexngth < 1) {
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
            {datad? <div>
                  {datad.map((datad, pos) => {

                      const configProduct = {
                        ...datad
                      };

                        return (
                          <DesignersAbout key={pos} {...configProduct} />
                        );

                      })}    
            </div>: ""}
            

        
      <div className="forms">
        <div className="filtercontent">
          <div className="brandtit">{filterBrand}</div>
          <div className="brandcount">Showing (120) styles</div>
          <div className="line"></div>
          <div className="filtersection">
              {/* <div className="filerstitle">FILTERS</div> */}
              <h5>By Gender</h5>
                <div className="genderfilter">
                  
                  <Formradio className="firstform" {...configFilters} />  
                </div> 
                <h5>By Brand</h5>
                
                <div className="brandfilter">
                  
                  <Formradio className="firstform" {...configsortFilters} />
                </div> 
                <div className="gap"></div>
                <h5>By Category</h5>
                <div className="catfilter">
                
                  <Formradio className="firstform" {...configDresstypeFilters} />
                </div>
              </div>
        </div>


        
          
        <div className="productresultssection">

          <div className="filterbar">
              <div className="firstbar">
              <SortIcon />SORT BY 
              </div>
              <div className="secondbar"  onClick={filterbtntol} >
              <FilterListIcon />FILTER 
              </div> 
          </div>
          
          <div className="productResults">
            {data.map((product, pos) => {
              const { productThumbnail, productName, productPrice,brandName,brandimage } = product;
              
              if (!productThumbnail || !productName ||
                typeof productPrice === 'undefined') return null;
    
              const configProduct = {
                ...product
              };
        
              if(brandName===filterBrand){
                return (
                  <Designerproducts key={pos} {...configProduct} />
                );
              }
            })}
          </div>
        </div>
        </div>
  
        {/* {!isLastPage && (
          <LoadMore {...configLoadMore} />
        )} */}

        <Footer />
      </div>
    )
}

export default Desingner
