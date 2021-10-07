import React,{useState,useEffect} from 'react'
import {useParams,useHistory,Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {fetchProductStart,setProduct, setProducts} from './../../redux/Products/products.actions'
import Button from './../../components/forms/Button/Button'
import './styles.scss'
import {addProduct} from './../../redux/Cart/cart.actions'
import {addProducttoWishlist} from './../../redux/Wishlist/wishlist.actions'
import "react-alice-carousel/lib/alice-carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Simslider from './Simslider/Simslider'
import Footer from '../Footer/Footer'
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from './../Modal/Modal'
import FormInput from './../forms/FormInput/Forminput'
import menme from './../../assets/MENMEASUREMENT.png'
import womenme from './../../assets/WOMENMEASUREMENT.png'
import InnerImageZoom from 'react-inner-image-zoom';
import Reviews from './Reviews/Reviews'
import {motion} from 'framer-motion'
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Simslider1 from './Simslider1/Simslider1'
import Simslider3 from './Simslider3/Simslider3'
import Simslider2 from './Simslider2/Simslider2'
import BookmarkIcon from '@material-ui/icons/Bookmark';

const mapState = state => ({
    product:state.productsData.product
});


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    heading: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: theme.typography.fontWeightRegular,
      
    }
  }));




function ProductCard() {
      const dispatch = useDispatch();
    const history = useHistory();
    const {productID} = useParams();
    const {product} = useSelector(mapState);
    const [size,setSize] = useState('')
    const [filterType,setFilterType] = useState('')
    const [hideModal, setHideModal] = useState(true);
    const [userName, setUserName] = useState();
    const [productNname, setProductNname] = useState('');
    const [email, setEmail] = useState();
    const [height, setHeight] = useState();
    const [neckround, setNeckround] = useState();
    const [shoulder, setShoulder] = useState();
    const [acrossfront, setAcrossfront] = useState();
    const [acrossback, setAcrossback] = useState();
    const [chest, setChest] = useState();
    const [stomach, setStomach] = useState();
    const [trouserwaist, setTrouserwaist] = useState();
    const [armhole, setArmhole] = useState();
    const [sleevelength, setSleevelength] = useState();
    const [bicep, setBicep] = useState();
    const [sleeveround, setSleeveround] = useState();
    const [kurtalength, setKurtalength] = useState();
    const [sherwanilength, setSherwanilength] = useState();
    const [elbow, setElbow] = useState();
    const [trouserlength, setTrouserlength] = useState();
    const [hip, setHip] = useState();
    const [skirtlength, setSkirtlength] = useState();
    const [inseemlength, setInseemlength] = useState();
    const [crotch, setCrotch] = useState();
    const [thigh, setThigh] = useState();
    const [knee, setKnee] = useState();
    const [calf, setCalf] = useState();
    const [ankle, setAnkle] = useState();
    const [message, setMessage] = useState();
    const [scale, setScale] = useState();
    const [frontneckdepth, setFrontneckdepth] = useState();
    const [backneckdepth, setBackneckdepth] = useState();
    const [shouldertoapex, setShouldertoapex] = useState();
    const [wrist, setWrist] = useState();
    const [bust, setBust] = useState();
    const [upperbust, setUpperbust] = useState();
    const [underbust, setUnderbust] = useState();
    const [waist, setWaist] = useState();
    const [bottomlength, setBottomlength] = useState();
    const [waistofloorlength, setWaistofloorlength] = useState();
    const [inseam, setInseam] = useState();
    const [lowerwaist, setLowerwaist] = useState();
    const [lengthofoutfit, setLengthofoutfit] = useState();
    const [frontcrotch, setFrontcrotch] = useState();
    const [backcrotch, setBackcrotch] = useState();
    const [popcart, setPopcart] =useState(false)
    const [selectedproductSize,setSelectedproductSize]=useState('')
    const [error, setError] = useState('')




    const { productCategory,
            productName,
            productThumbnail,
            productThumbnail1,
            productThumbnail2,
            productThumbnail3,
            productPrice,
            discountproductPrice,
            productDesc,
            productSize,
            brandName,
            similiarProduct1id,
            similiarProduct1Name,
            similiarProduct1Price,
            similiarProduct1image,
            similiarProduct2id,
            similiarProduct2Name,
            similiarProduct2Price,
            similiarProduct2image,
            similiarProduct3id,
            similiarProduct3Name,
            similiarProduct3Price,
            similiarProduct3image,
            similiarProduct4id,
            similiarProduct4Name,
            similiarProduct4Price,
            similiarProduct4image} = product;

    const [selimg, setSelimg] = useState(productThumbnail)

    const similiar1 = {similiarProduct1Name,similiarProduct1id,similiarProduct1image,similiarProduct1Price}
    const similiar2 ={similiarProduct2id,
            similiarProduct2Name,
            similiarProduct2Price,
            similiarProduct2image}
    const similiar3 ={similiarProduct3id,
                similiarProduct3Name,
                similiarProduct3Price,
                similiarProduct3image}
    const similiar4 ={similiarProduct4id,
                    similiarProduct4Name,
                    similiarProduct4Price,
                    similiarProduct4image}

    const reviews = [{
        rating:'5',
        text:'Problem in size ... Loose as compared to size on chart Its too transparent ..... Though material is soft yet not the quality expected fm W',
        name:'sheetal',
        date:'15 2019'
    },{
        rating:'3',
        text:'Simple, elegant but so beautiful. Love the texture of this kurti . Same as image. Love you haberdasher ,your each and every delivery makes me so happy ❤❤❤❤❤',
        name:'Sharath',
        date:'12 2020'
    },{
        rating:'3',
        text:'Simple, elegant but so beautiful. Love the texture of this kurti . Same as image. Love you haberdasher ,your each and every ',
        name:'Sharath',
        date:'12 2020'
    },{
        rating:'3',
        text:'Simple, elegant but so beautiful. Love the texture of this kurti . Same as image. Love you haberdasher ,your each and every delivery makes me so happy',
        name:'Sharath',
        date:'12 2020'
    },{
        rating:'5',
        text:'Problem in size ... Loose as compared to size on chart Its too transparent ..... Though material is soft yet not the quality expected fm W',
        name:'sheetal',
        date:'15 2019'
    },{
        rating:'3',
        text:'Simple, elegant but so beautiful. Love the texture of this kurti . Same as image. Love you haberdasher ,your each and every delivery makes me so happy ❤❤❤❤❤',
        name:'Sharath',
        date:'12 2020'
    }]
    
    
   

            const data = [
                {
                  image: `${productThumbnail}`,
                  text: 'img1'
                },
                {
                  image: `${productThumbnail1}`,
                  text: 'img2'
                },
                {
                  image: `${productThumbnail2}`,
                  text: 'img3'
                },
              ];
   
 
    const productPlus =({backcrotch,frontcrotch,lengthofoutfit,lowerwaist,inseam,waistofloorlength,bottomlength,waist,
                    underbust,upperbust,bust,wrist,shouldertoapex,backneckdepth,frontneckdepth,scale,message,ankle,
                    calf,knee,thigh,crotch,inseemlength,skirtlength,hip,trouserlength,elbow,sherwanilength,kurtalength,
                    sleeveround,bicep,sleevelength,armhole,trouserwaist,stomach,chest,acrossback,acrossfront,shoulder,
                    neckround,height,email,userName,selectedproductSize })

    
    
    
   

    const classes = useStyles();
        
  
        useEffect(()=>{
            if(productThumbnail!== 'undefined'){
                setSelimg(productThumbnail)
            }
            
         
        },[productThumbnail])

        const popcartfun =()=>{
            setTimeout(() => {
                setPopcart(false)
              }, 2000);
        }
    

    useEffect( ()=>{
       
        dispatch(
             fetchProductStart(productID)
        )
        
        return  () => {
            dispatch(
                 setProduct({})
            )
        }
    },[productID])

    const toggleModal = () => {
        setHideModal(!hideModal)
    }

    const configModal = {
        hideModal,
        toggleModal
      }

      
    const resetForm = () => {
        setHideModal(true);
        setProductNname('');
        
    }

    const handleSubmit = e =>{
        e.preventDefault();
        setHideModal(true);
    }

   

    var  settings = {
        // dots: true,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        adaptiveHeight: true,
        
        responsive: [{
            breakpoint: 1500,
            settings: {
                slidesToShow: 5
            }
        },{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2
            }
        }]
      };

    const configAddToCartBtn= {
        type:'button'
    }
  
    const handleAddToCart = (product) => {
        
        const add = {...product, ...productPlus}
        if(selectedproductSize !="")
        {
            setPopcart(true)
            popcartfun();
            dispatch(
                addProduct(add)
           );
        }
        else {
            setError('Please select size')
        }
        

        resetForm();
        
        // history.push('/cart')
    }   

   

    const handleAddToWishlist = (product) => {
        if (!product) return;
        dispatch(
            addProducttoWishlist(product)
        );
    } 


    const handleFilter = (e) => {
        setSize(e.target.value)  
      };

      const handleScale = (e) => {
        setScale(e.target.value)  
      };
    

    const configFilters = {
        defaultValue: size,
        options: [{
          name: 'S',
          value: 'S'
        }, {
          name: 'L',
          value: 'L'
        },
        {
            name: 'XL',
            value: 'XL'
          },{
            name: 'XXL',
            value: 'XXL'
          },
          {
            name: 'XXXL',
            value: 'XXXL'
          }], 
        handleChange: handleFilter
      };

      const configscaleFilters = {
        defaultValue: scale,
        options: [{
          name: 'Select scale',
          value: ''
        }, {
          name: 'Inches',
          value: 'inches'
        }, {
          name: 'Centimeters',
          value: 'Centimeters'
        }], 
        handleChange: handleScale
      };
      

    return (
        <div className="productcard">
            <div className="productsection">
                <div className="imagesection">
                    <div className="indimage">
                        <img src={productThumbnail} onClick={()=>setSelimg(productThumbnail)} />
                    </div>
                    <div className="indimage">
                        <img src={productThumbnail1} onClick={()=>setSelimg(productThumbnail1)} />
                    </div>
                    <div className="indimage">
                        <img src={productThumbnail2} onClick={()=>setSelimg(productThumbnail2)} />
                    </div>
                    {/* <div className="indimage">
                        <img src={img4} onClick={()=>setSelimg(img4)} />
                    </div> */}
                </div>
                <div className="mainimage">
                    <div className="mainimg">
                        {/* <img src={selimg} /> */}
                        <InnerImageZoom zoomScale={1.6} src={selimg} zoomSrc={selimg} />
                    </div>
                </div>
                <div className="productdesc">
                    <div className="sticky">
                        
                    <div className="firstsection">
                        <div className="designername">
                            <div className="desname">
                                {brandName}
                            </div>
                            <div className="wishlistsymbol" onClick={()=>handleAddToWishlist(product)}>
                                {/* <BookmarkBorderIcon /> */}
                                <BookmarkIcon />
                            </div>
                        </div>   
                        <div className="productname">
                            {productName}
                        </div>
                        <div className="productprice">
                            <div className="actualprice">
                                ₹ {productPrice}
                            </div>
                            <div className="discountprice">
                                ₹ {discountproductPrice}
                            </div>
                        </div>
                        <div className="line">
                        
                        </div>
                        <div className="tax">
                            (MRP ₹ {productPrice} incl. of all taxes in India)
                        </div>
                    </div>

                    <div className="secondsection">
                        <div className="selectsize">
                            Select Size (Size Guide)
                        </div>
                        <div className="sizes">
                            <div class="List__numbers">
                            <div class="Property__Field">
                            <input id="ShirtSize__36" type="radio" name="properties[_Shirt Size?]" value="xs" onClick={(e)=>{setSelectedproductSize(e.target.value)}}  />
                            <label for="ShirtSize__36">XS</label>
                            </div>
                            <div class="Property__Field">
                            <input id="ShirtSize__38" type="radio" name="properties[_Shirt Size?]" value="s" class="activeradio" onClick={(e)=>{setSelectedproductSize(e.target.value)}}  />
                            <label for="ShirtSize__38">S</label>
                            </div>
                            <div class="Property__Field">
                            <input id="ShirtSize__40" type="radio" name="properties[_Shirt Size?]" value="m" onClick={(e)=>{setSelectedproductSize(e.target.value)}} />
                            <label for="ShirtSize__40">M</label>
                            </div>
                            <div class="Property__Field">
                            <input id="ShirtSize__42" type="radio" name="properties[_Shirt Size?]" value="l" onClick={(e)=>{setSelectedproductSize(e.target.value)}} />
                            <label for="ShirtSize__42">L</label>
                            </div>
                            <div class="Property__Field">
                            <input id="ShirtSize__44" type="radio" name="properties[_Shirt Size?]" value="xl" onClick={(e)=>{setSelectedproductSize(e.target.value)}} />
                            <label for="ShirtSize__44">XL</label>
                            </div>
                            <div class="Property__Field hide">
                            <input id="ShirtSize__46" type="radio" name="properties[_Shirt Size?]" value="xxl" onClick={(e)=>{setSelectedproductSize(e.target.value)}} />
                            <label for="ShirtSize__46">XXL</label>
                            </div>
                            <div class="Property__Field hide">
                            <input id="ShirtSize__48" type="radio" name="properties[_Shirt Size?]" value="xxxl" onClick={(e)=>{setSelectedproductSize(e.target.value)}}  />
                            <label for="ShirtSize__48">XXL</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div>{error}</div>
                    <div className="thirdsection">
                        {/* <div className="coupons">
                            <div className="only">
                                You pay Only: <span>$350</span>
                            </div>
                            <div className="save">
                                Save: $174
                            </div>
                        </div> */}
                        <div className="applycoupon">
                            Apply the coupon during checkout
                        </div>
                        <div className="orderabove">
                            Orders above Rs.1799. T&C apply.
                        </div>
                        <div className="couponcode">
                            Coupon Code: <span>WONDERLAND15</span>
                        </div>
                    </div>
                    <div className="fourthsection">
                        <div className="buttons">
                            <div className="addtobagbutton">
                                <Button className="btn" onClick={() => handleAddToCart(product)}>
                                    ADD TO BAG
                                </Button>
                            </div>
                            <div className="customize">
                                <Button className="btns" onClick={() => toggleModal()}>
                                    CUSTOMIZE
                                </Button>
                            </div>
                        </div>
                    </div>


                    <div className={productCategory==="mens" ? 'mencustom' : 'mencustomdeactive'}>
                    <Modal {...configModal}>
                    
                   
                            <div className="addNewProductForm">
                            <form onSubmit={handleSubmit}>
                                {/* <div className="Customisationword">
                                    Men Customisation
                                </div> */}

                                <h3>
                                "ANVSHN provides you the option to custom made your selected outfit to your
                                 size by using our customized service. It’s very user-friendly. Just fill 
                                 your body measurement in the form given below according to the outfit you 
                                 have selected for the perfect fit and you are sorted!"
                                </h3>

                                
                                <img src={menme} />

                                <div className="measurementdetails">
                                    Measurement details
                                </div>
                                

                                <div className="customiseinfo">
                                            <div className="customiseinforowone">

                                            {/* <FormSelect className="firstformprocard" {...configscaleFilters} />   */}
                                                <FormInput className="customiseinfoformone"
                                                    label="Name"
                                                    type="text"
                                                    value={userName}
                                                    handleChange={e => setUserName(e.target.value)}
                                                />
                                            </div>

                                            <div className="customiseinforowtwo">
                                                <FormInput className="customiseinfoform"
                                                    label="Email Id"
                                                    type="text"
                                                    value={email}
                                                    handleChange={e => setEmail(e.target.value)}
                                                />
                                                <FormInput className="customiseinfoform"
                                                    label="Heighta"
                                                    type="text"
                                                    value={height}
                                                    handleChange={e => setHeight(e.target.value)}
                                                />
                                            </div>
                                    </div>
                            
                                
                                <div className="customrows">                   
                                {/* <div className="">Top Measurement</div> */}
                                    <div className="customrowone">
                                    <div className="">
                                    <h4>Top Measurement</h4>
                                    </div>
                                    <div className="customrowoneflex">
                                        <div className="customrowoneone">
                                    
                                                

                                            <FormInput
                                                label="Length Of Outfit"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={lengthofoutfit}
                                                handleChange={e => setLengthofoutfit(e.target.value)}
                                            />
                                            <FormInput
                                                label="Neck Around"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={neckround}
                                                handleChange={e => setNeckround(e.target.value)}
                                            />
                                            <FormInput
                                                label="Shoudler To Apex"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={shouldertoapex}
                                                handleChange={e => setShouldertoapex(e.target.value)}
                                            />
                                            <FormInput
                                                label="Shoudler"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={shoulder}
                                                handleChange={e => setShoulder(e.target.value)}
                                            />
                                             <FormInput
                                                label="Armhole"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={armhole}
                                                handleChange={e => setArmhole(e.target.value)}
                                            />
                                            <FormInput
                                                label="Across Front"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={acrossfront}
                                                handleChange={e => setAcrossfront(e.target.value)}
                                            />
                                            <FormInput
                                                label="Across Back"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={acrossback}
                                                handleChange={e => setAcrossback(e.target.value)}
                                            />
                                            <FormInput
                                                label="Bicep"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bicep}
                                                handleChange={e => setBicep(e.target.value)}
                                            />
                                            <FormInput
                                                label="Chest"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={chest}
                                                handleChange={e => setChest(e.target.value)}
                                            />
                                            
                                    </div>
                                        <div className="customrowtwo">
                                            <FormInput
                                                label="Sleeve Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={sleevelength}
                                                handleChange={e => setSleevelength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Stomach"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={stomach}
                                                handleChange={e => setStomach(e.target.value)}
                                            />
                                            <FormInput
                                                label="Tourser Waist"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={trouserwaist}
                                                handleChange={e => setTrouserwaist(e.target.value)}
                                            />
                                           
                                            <FormInput
                                                label="SLeeve Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bicep}
                                                handleChange={e => setBicep(e.target.value)}
                                            />
                                            <FormInput
                                                label="Sleeve Round"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={sleeveround}
                                                handleChange={e => setSleeveround(e.target.value)}
                                            />
                                            <FormInput
                                                label="Kurta Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={kurtalength}
                                                handleChange={e => setKurtalength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Sherwani length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={sherwanilength}
                                                handleChange={e => setSherwanilength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Elbow"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={elbow}
                                                handleChange={e => setElbow(e.target.value)}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                
                                            
                                    <div className="customrowthree">
                                    <h4>Bottom Mesurements</h4>
                                            <FormInput
                                                label="Trouser Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={trouserlength}
                                                handleChange={e => setTrouserlength(e.target.value)}
                                            />
                                             <FormInput
                                                label="Inseam Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={inseemlength}
                                                handleChange={e => setInseemlength(e.target.value)}
                                            />
                                             <FormInput
                                                label="Front Crotch"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={frontcrotch}
                                                handleChange={e => setFrontcrotch(e.target.value)}
                                            />
                                            <FormInput
                                                label="Back Crotch"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={backcrotch}
                                                handleChange={e => setBackcrotch(e.target.value)}
                                            />

                                             <FormInput
                                                label="Hip"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={hip}
                                                handleChange={e => setHip(e.target.value)}
                                            />

                                            <FormInput
                                                label="Thigh"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={thigh}
                                                handleChange={e => setThigh(e.target.value)}
                                            />
                                                                                       
                                            <FormInput
                                                label="Knee"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={knee}
                                                handleChange={e => setKnee(e.target.value)}
                                            />
                                            <FormInput
                                                label="Calf"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={calf}
                                                handleChange={e => setCalf(e.target.value)}
                                            />
                                            <FormInput
                                                label="Ankle"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={ankle}
                                                handleChange={e => setAnkle(e.target.value)}
                                            />
                                            <FormInput
                                                label="Message"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={message}
                                                handleChange={e => setMessage(e.target.value)}
                                            />
                                    </div>
                                </div>

                                <Button type="submit" className="btns">
                                    Submit
                                </Button>

                            </form>
                            </div>
                        
                              
                        </Modal> 
                        </div> 
                        <div className={productCategory==="womens" ? 'womencustom' : 'womencustomdeactive'}>
                    <Modal {...configModal}>
                    
                   
                            <div className="addNewProductForm">
                            <form onSubmit={handleSubmit}>
                                {/* <div className="Customisationword">
                                    Women Customisation
                                </div> */}

                                <h3>
                                "ANVSHN provides you the option to custom made your selected outfit to your
                                 size by using our customized service. It’s very user-friendly. Just fill 
                                 your body measurement in the form given below according to the outfit you 
                                 have selected for the perfect fit and you are sorted!"
                                </h3>

                                
                                <img src={womenme} />

                                <div className="measurementdetails">
                                    Measurement details
                                </div>
                                

                                <div className="customiseinfo">
                                            <div className="customiseinforowone">

                                            {/* <FormSelect className="firstformprocard" {...configscaleFilters} />   */}
                                                <FormInput className="customiseinfoformone"
                                                    label="Name"
                                                    type="text"
                                                    value={userName}
                                                    handleChange={e => setUserName(e.target.value)}
                                                />
                                            </div>

                                            <div className="customiseinforowtwo">
                                                <FormInput className="customiseinfoform"
                                                    label="Email Id"
                                                    type="text"
                                                    value={email}
                                                    handleChange={e => setEmail(e.target.value)}
                                                />
                                                <FormInput className="customiseinfoform"
                                                    label="Height"
                                                    type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                    value={height}
                                                    handleChange={e => setHeight(e.target.value)}
                                                />
                                            </div>
                                    </div>
                            
                                
                                <div className="customrows">                   
                                {/* <div className="">Top Measurement</div> */}
                                    <div className="customrowone">
                                    <div className="">
                                    <h4>Top Measurement</h4>
                                    </div>
                                    <div className="customrowoneflex">
                                        <div className="customrowoneone">                                           
                                            <FormInput
                                                label="Neck Around"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={neckround}
                                                handleChange={e => setNeckround(e.target.value)}
                                            />
                                            <FormInput
                                                label="Front Neck Depth"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={frontneckdepth}
                                                handleChange={e => setFrontneckdepth(e.target.value)}
                                            />
                                            <FormInput
                                                label="Back Neck Depth"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={backneckdepth}
                                                handleChange={e => setBackneckdepth(e.target.value)}
                                            />
                                            <FormInput
                                                label="Shoudler To Apex"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={shouldertoapex}
                                                handleChange={e => setShouldertoapex(e.target.value)}
                                            />
                                            <FormInput
                                                label="Shoudler"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={shoulder}
                                                handleChange={e => setShoulder(e.target.value)}
                                            />
                                            <FormInput
                                                label="Armhole"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={armhole}
                                                handleChange={e => setArmhole(e.target.value)}
                                            />
                                            <FormInput
                                                label="Bicep"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bicep}
                                                handleChange={e => setBicep(e.target.value)}
                                            />
                                            <FormInput
                                                label="Sleeve Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={sleevelength}
                                                handleChange={e => setSleevelength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Wrist"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={wrist}
                                                handleChange={e => setWrist(e.target.value)}
                                            />
                                            <FormInput
                                                label="Upper bust"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={upperbust}
                                                handleChange={e => setUpperbust(e.target.value)}
                                            />
                                            <FormInput
                                                label="Bust"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bust}
                                                handleChange={e => setBust(e.target.value)}
                                            />
                                            <FormInput
                                                label="Under Bust"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={underbust}
                                                handleChange={e => setUnderbust(e.target.value)}
                                            />
                                            
                                            
                                    </div>
                                        <div className="customrowtwo">


                                        <FormInput
                                                label="Bust Height"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bust}
                                                handleChange={e => setBust(e.target.value)}
                                            />
                                             <FormInput
                                                label="Bust Seperation"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bust}
                                                handleChange={e => setBust(e.target.value)}
                                            />
                                             <FormInput
                                                label="Waist"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={waist}
                                                handleChange={e => setWaist(e.target.value)}
                                            />
                                            <FormInput
                                                label="Bottom Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={bottomlength}
                                                handleChange={e => setBottomlength(e.target.value)}
                                            />
                                            
                                            <FormInput
                                                label="Waist to Floor-Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={waistofloorlength}
                                                handleChange={e => setWaistofloorlength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Inseam"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={inseam}
                                                handleChange={e => setInseam(e.target.value)}
                                            />
                                            <FormInput
                                                label="Lower Waist"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={lowerwaist}
                                                handleChange={e => setLowerwaist(e.target.value)}
                                            />
                                            <FormInput
                                                label="Hip"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={hip}
                                                handleChange={e => setHip(e.target.value)}
                                            />
                                            <FormInput  
                                                label="Thigh"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={thigh}
                                                handleChange={e => setThigh(e.target.value)}
                                            />
                                            <FormInput
                                                label="Knee"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={knee}
                                                handleChange={e => setKnee(e.target.value)}
                                            />
                                            <FormInput
                                                label="Calf"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={calf}
                                                handleChange={e => setCalf(e.target.value)}
                                            />
                                            <FormInput
                                                label="Ankle"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                    max="10000.00"
                                                step="0.01"
                                                value={ankle}
                                                handleChange={e => setAnkle(e.target.value)}
                                            />
                                            </div>
                                        </div>
                                    </div>
                                
                                            
                                    <div className="customrowthree">
                                    <h4>Bottom Mesurements</h4>
                                            <FormInput
                                                label="Trouser Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={trouserlength}
                                                handleChange={e => setTrouserlength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Hip"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={hip}
                                                handleChange={e => setHip(e.target.value)}
                                            />
                                            <FormInput
                                                label="Skirt Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={skirtlength}
                                                handleChange={e => setSkirtlength(e.target.value)}
                                            />

                                            <FormInput
                                                label="Inseam Length"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={inseemlength}
                                                handleChange={e => setInseemlength(e.target.value)}
                                            />
                                            <FormInput
                                                label="Crotch"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={crotch}
                                                handleChange={e => setCrotch(e.target.value)}
                                            />
                                            <FormInput
                                                label="Thigh"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={thigh}
                                                handleChange={e => setThigh(e.target.value)}
                                            />
                                            <FormInput
                                                label="Knee"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={knee}
                                                handleChange={e => setKnee(e.target.value)}
                                            />
                                            <FormInput
                                                label="Calf"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={calf}
                                                handleChange={e => setCalf(e.target.value)}
                                            />
                                            <FormInput
                                                label="Message"
                                                type="number"
                                                min="0.00"
                                                max="10000.00"
                                                step="0.01"
                                                value={message} 
                                                handleChange={e => setMessage(e.target.value)}
                                            />
                                    </div>
                                </div>

                                <Button type="submit">
                                    Submit
                                </Button>

                            </form>
                            </div>
                        
                              
                        </Modal> 
                        </div> 





                    <div className="fifthsection">
                        <div className="desctitle">
                            Product details
                        </div>
                        <div className="desccontent" dangerouslySetInnerHTML={{ __html: productDesc }}>
                            {/* Sea-green pre-draped chiffon-organza saree with ruffle border. Comes with floral embroidered blouse enhanced with cutwork border.<br />
                            <br />
                                    . Component: 2<br />
                                    . Embroidered<br />
                                    . Neckline: U Neck<br />
                                    . Sleeve Length: Sleeveless<br />
                                    . Fabric: Blouse: Net; Saree: Chiffon, Organza<br />
                                    . Color: Green<br />
                                    . Pre-draped<br />
                                    . Ruffle saree<br />
                                    . Deep back<br />
                                    . Scallop cutwork<br /> */}
                            
                        </div>
                    </div>
                    <div className="sixthsection">
                        <div className="accordians">
                            <div className={classes.root}> 
                            <Accordion className="accordian">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography className="classHeading">Size & Fit</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                        Fits true to size, however those who are between sizes should take the larger size
                                        Designed for a slightly loose fit
                                        Mid-weight, slightly stretchy fabric
                                        Model is 177cm/ 5'10" and is wearing a UK 8
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordian">
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                                >
                                <Typography className="classHeading">Details & Care  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                        .Fits true to size, however those who are between sizes should take the larger size
                                        .Designed for a slightly loose fit
                                        .Mid-weight, slightly stretchy fabric
                                        .Model is 177cm/ 5'10" and is wearing a UK 8
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* <div className="customerreviews">
                <div className="customerreviewstitle">
                 Customer Reviews ({reviews.length})
                </div>
                <div className="line">

                </div>
                <div className="reviews">
                {reviews.map((review,pos)=>{
                    return(
                        <Reviews key={pos} {...review} />
                    )
                })}
                </div>
                
            </div> */}
                    
                        <div className="slider">
                            <div className="simliar">
                                You may also like
                            </div>
                            <div className="loongline">
                                    
                            </div>
                            <Slider  {...settings}>
                                <Simslider {...similiar1} /> 
                                <Simslider1 {...similiar2} />
                                <Simslider2 {...similiar3} />
                                <Simslider3 {...similiar4} />
                                <Simslider1 {...similiar2} />
                                

                            </Slider>
                        </div>

                        <div
                            className={popcart? "popupcart" :"popupcart-hide"}>
                            <motion.div 
                             initial={{y:40, opacity:0}}
                             animate={{y:0, opacity:1}}
                             transition={{ ease: "easeOut", duration: 0.4}}
                             className="popupcartbg">
                                    Product added to cart <LabelImportantIcon />
                            </motion.div>
                        </div>
                        <Footer />  
                    
                
                </div>
        
    )
}

export default ProductCard
