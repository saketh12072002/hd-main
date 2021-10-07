import React,{useState,useEffect} from 'react'
import './styles.scss'
import AliceCarousel from 'react-alice-carousel';
import Button from './../forms/Button/Button'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProductsStart} from './../../redux/Products/products.actions'
import Newarrivals from './Newarrivals/Newarrivals'
import Carousel from 'react-elastic-carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom'
import Headertwo from './../../components/Headertwo/Headertwo'
import Header from '../Header/Header'
import Shopnow from './Shopnow/Shopnow';

const mapState = ({ productsData }) => ({
    products: productsData.products
  });
  

function Directory() {

    const dispatch = useDispatch();
    const { products } = useSelector(mapState);
    const [data,setData] = useState()
        const daata = products;
        console.log(daata)


    useEffect(() => {
        dispatch(
          fetchProductsStart()    
        )
      }, []);

   
      

      if (!Array.isArray(products.data)) return null;
    if (products.data.length < 1) {
      return (
        <div className="products">
          <p>
            No search results.
          </p>
        </div>
      );
    }

    var settings = {
        // dots: true,
        arrow:true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        overflow:true,                            
        
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                initialSlide: 1,
                slidesToShow: 2,
                autoplaySpeed: 4000,
            }
        }]
      };


      var settingss = {
        // dots: true,
        arrow:true,
        infinite: true,
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 4000,
        overflow:true,                            
        
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                initialSlide: 1,
                slidesToShow: 1,
                autoplaySpeed: 4000,
            }
        }]
      };
     
      const handleChange = () => {
        setData('asdsd')
      }
     
   

    const configAddToCartBtn= {
        type:'button'
    }
    

    const link ="https://images.unsplash.com/photo-1529635229076-82fefed713c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    return (
        <div className="directory">
              <Headertwo />

              
              
                <div className="hero">
                    
                    <div className="carouselimg">                       
                       <AliceCarousel fadeOutAnimation
                              //  mouseTrackingEnabled={true}
                               touchTracking onResized
                               animationType="fadeIn"
                               overflow="hidden"
                               animationDuration={200}
                               infinite autoPlay autoPlayInterval="2000">
                               
                            
                                <img src="https://i.postimg.cc/vTSk8WWR/cr7.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/5t7sjZC7/cr1.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/vTSk8WWR/cr7.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/CKLvhFzn/cr4.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/cCYh9C52/cr6.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/RF2GLKGw/cr2.jpg" className="sliderimg"/>
                                <img src="https://i.postimg.cc/8PLq2Q1W/gar.jpg" className="sliderimg"/>
                                
                        </AliceCarousel>
                    </div>   
                    <div className="whiteboard">
                          <div className="whiteboarddata">
                            <h3>ANVSHN</h3>
                          prints and quint essential house codes
                            {/* {data} */}
                          </div>
                    </div>               
                </div>

                <div className="cats">
                  <div className="cattitle">
                      <div className="headtitle">
                              <div className="line1">

                              </div>
                              <div className="title">
                                  The Latest
                              </div>
                              <div className="line2">
                                
                              </div>
                      </div>
                      <div className="subtitle">
                            Our freshest arrivals
                      </div>
                  </div>
                  <div className="catsections">
                      <div className="firstcat">
                          <div className="title">
                                Consciously Crafted
                          </div>
                          <div className="catline">

                          </div>
                          <div className="content">
                                A curation of all sustainable and  conscously crafted outfits for a better tomorrow
                          </div>
                    </div>
                    <div className="secondcat">
                    <div className="title">
                            Laidback Summer
                      </div>
                      <div className="catline">

                      </div>
                      <div className="content">
                            A curation of all sustainable and  conscously crafted outfits for a better tomorrow
                      </div>
                      
                    </div>
                    <div className="thirdcat">
                    <div className="title">
                            Couple Collection
                      </div>
                      <div className="catline">

                      </div>
                      <div className="content">
                            A curation of all sustainable and  conscously crafted outfits for a better tomorrow
                      </div>
                    </div>
                  </div>
               
              </div>


              {/* ..................................... */}
              <div className="newarrivalbg">
              <div className="newarrival">
                        <div className="gridtitle">
                              <div className="headtitle">
                                  <div className="line1">

                                  </div>
                                  <div className="title">
                                      Designers
                                  </div>
                                  <div className="line2">
                                    
                                  </div>
                              </div>
                              <div className="subtitle">
                             Shop By Designers
                              </div>
                        </div>
                    <Slider  {...settingss}>
                        {products.data.map((product, pos) => {
                            const { productThumbnail, productName, productPrice } = product;
                            if (!productThumbnail || !productName ||
                            typeof productPrice === 'undefined') return null;
                            // if(productPrice=="2133")

                            // const configProduct = {
                            //     ...product
                            //   };
                                
                           
                            return (
                                        <Shopnow key={pos} {...product} />                   
                            );
                        })}
                       </Slider>
                    </div>
              </div>

                    {/* ........................................... */}

              

        {/*-----------the latest grid section------------- */}

                <div className="gridofgrid">
                    <div className="gridtitle">
                          <div className="headtitle">
                              <div className="line1">

                              </div>
                              <div className="title">
                                  ANVSHN
                              </div>
                              <div className="line2">
                                
                              </div>
                          </div>
                          <div className="subtitle">
                            Explore the Collection
                          </div>
                    </div>
                    <div className="gridcontent">
                      <div className="firstgrid">
                        <div className="fristgridfirst">
                            <div className="section">
                                <div className="title">
                                    Men
                                </div>
                                <div className="subtitle">
                                    CONTEMPORARY CLASSICS
                                </div>
                                <div className="line">

                                </div>
                                <div className="shopnow">
                                  SHOP NOW  
                                </div>
                            </div>
                        </div>
                        <div className="fristgridsecond">
                            <div className="section">
                                <div className="title">
                                    Women
                                </div>
                                <div className="subtitle">
                                    CONTEMPORARY
                                </div>
                                <div className="line">

                                </div>
                                <div className="shopnow">
                                  SHOP NOW  
                                </div>
                            </div>
                        </div>
                      </div>
                        <div className="secondgrid">
                            <div className="secondgridfirst">
                                <div className="section">
                                    <div className="title">
                                        Designers
                                    </div>
                                    <div className="subtitle">
                                        Marriage
                                    </div>
                                    <div className="line">

                                    </div>
                                    <div className="shopnow">
                                      SHOP NOW  
                                    </div>
                                </div>
                            </div>
                            <div className="secondgridsecond">
                                    <div className="section">
                                        <div className="title">
                                            Anvshn
                                        </div>
                                        <div className="subtitle">
                                            CLASSICS
                                        </div>
                                        <div className="line">

                                        </div>
                                        <div className="shopnow">
                                          SHOP NOW  
                                        </div>
                                    </div>
                            </div>
                        </div>
                      </div>
                </div>

                


        {/*-----------end of the latest grid section------------- */}
              
               
                
                
                
        <div className="newarrivalbg">
                    <div className="newarrival">
                        <div className="gridtitle">
                              <div className="headtitle">
                                  <div className="line1">

                                  </div>
                                  <div className="title">
                                      Latest Designs
                                  </div>
                                  <div className="line2">
                                    
                                  </div>
                              </div>
                              <div className="subtitle">
                              Explore new on ANVSHN
                              </div>
                        </div>
                    <Slider  {...settings}>
                        {products.data.map((product, pos) => {
                            const { productThumbnail, productName, productPrice } = product;
                            if (!productThumbnail || !productName ||
                            typeof productPrice === 'undefined') return null;
                           
                            return (
                                        <Newarrivals key={pos} {...product} />                   
                            );
                        })}
                       </Slider>
                    </div>
                        
                    <div className="gap"></div>
                    <Footer />
                    
              
        </div>
        </div>
    )
}

export default Directory
