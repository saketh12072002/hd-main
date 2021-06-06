import React,{useEffect} from 'react'
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

const mapState = ({ productsData }) => ({
    products: productsData.products
  });
  

function Directory() {

    const dispatch = useDispatch();
    const { products } = useSelector(mapState);
    

    useEffect(() => {
        dispatch(
          fetchProductsStart()    
        )
      }, []);

      console.log('directory')
      console.log(products)
      

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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 650,
            settings: {
                initialSlide: 2,
                slidesToShow: 2
            }
        }]
      };
     

     
   

    const configAddToCartBtn= {
        type:'button'
    }
    

    const link ="https://images.unsplash.com/photo-1529635229076-82fefed713c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
    return (
        <div className="directory">
              <Headertwo />
              <div className="explore">
                 Explore
              </div>
                <div className="hero">
                    <div className="img">                       
                       <AliceCarousel fadeOutAnimation
                               mouseTrackingEnabled={true}
                               touchTracking onResized
                               animationType="fadeIn"
                               overflow="hidden"
                               infinite autoPlay autoPlayInterval="8000">
                                <img src="https://images.pexels.com/photos/2293102/pexels-photo-2293102.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="sliderimg"/>
                                <img src="https://images.pexels.com/photos/4612681/pexels-photo-4612681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="sliderimg"/>
                                <img src="https://images.pexels.com/photos/6500535/pexels-photo-6500535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="sliderimg"/>
                                <img src="https://images.pexels.com/photos/46244/girl-portrait-carnival-retro-46244.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="sliderimg"/>
                        </AliceCarousel>
                    </div>                  
                </div>

                <div className="underhero">
                    {/* <img src="https://images.pexels.com/photos/3742709/pexels-photo-3742709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /> */}
                   
                    
                    <Button className="underherobtn" {...configAddToCartBtn} >
                            SHOP NOW
                        </Button>
                </div>


                <div className="gridofgrid">
                    <div className="ordergrid">

                        <div className="firstgrid">
                          <div className="name">
                            ANVSHN
                          </div>
                       
                          <img src ="https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                        </div>
                        
                        <div className="secondgrid">
                            <div className="mdgrid">
                               {/* men designer */}
                               <div className="mendesigner">
                                 MEN DESIGNER
                              </div>
                               <img src ="https://images.pexels.com/photos/5264948/pexels-photo-5264948.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            </div>
                            <div className="wdgrid">
                              <div className="womendesigner">
                                 WOMEN DESIGNER
                              </div>
                            <img src ="https://images.pexels.com/photos/6774363/pexels-photo-6774363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar">
                  <div className="store">
                    store
                  </div>
                  <div className="appointmentbar">
                    appointment
                  </div>
                  <div className="collabration">
                    collabration
                  </div>
                  <div className="Drop">
                    Drop your design
                  </div>
                </div>

                <Link to="/dropdesign">
                <div className="dropdesign">
                  <div className="dropname">
                      <div className="name">DROP DESIGN</div>
                  </div>
                  
                    <img src ="https://image.freepik.com/free-photo/blue-oil-paint-strokes-textured_53876-96059.jpg" />
                  
                </div>
                </Link>
                
                
                    <div className="newarrival">
                      <h1>New Arrivals</h1>
                    <Slider  {...settings}>
                        {products.data.map((product, pos) => {
                            const { productThumbnail, productName, productPrice } = product;
                            if (!productThumbnail || !productName ||
                            typeof productPrice === 'undefined') return null;
                            // if(productPrice=="2133")

                            // const configProduct = {
                            //     ...product
                            //   };
                                
                           
                            return (
                                        <Newarrivals key={pos} {...product} />                   
                            );
                        })}
                       </Slider>
                    </div>
                    <Footer />
                    
              
        </div>
    )
}

export default Directory
