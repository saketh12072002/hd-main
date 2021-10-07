import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Designerslider from './Designerslider/Designerslider';
import './styles.scss'

function DesignersAbout(datad) {


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

    return (
        <div className="desingerimage">
            {/* <div className="brandname">{filterBrand}</div> */}
                <img src={datad.designerPicture} />
                <div className="sliderdesignerbac">
                  <div className="bname"><span>{datad.desingerName}</span></div>
                  {/* <div className="line"></div> */}
                  <div className="sliderdesigner">
                    <Slider  {...settings}>
                            <Designerslider {...datad}/>   
                        </Slider>
                  </div>
                </div>
            </div>
    )
}

export default DesignersAbout
