import React,{useState,useEffect} from 'react'
import {useParams,useHistory,Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {fetchProductStart,setProduct, setProducts} from './../../redux/Products/products.actions'
import Button from './../../components/forms/Button/Button'
import './styles.scss'
import {addProduct} from './../../redux/Cart/cart.actions'
import { handleAddToCart } from '../../redux/Cart/cart.utils'
import { addProducttoWishlist } from '../../redux/Wishlist/wishlist.actions'
import { handleUserProfile } from '../../firebase/utils'
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
import FormSelect from './../../components/forms/FormSelect/FormSelect'
import Modal from './../Modal/Modal'
import FormInput from './../forms/FormInput/Forminput'
import menme from './../../assets/MENMEASUREMENT.png'
import womenme from './../../assets/WOMENMEASUREMENT.png'
import SliderImage from 'react-zoom-slider';



const mapState = state => ({
    product:state.productsData.product
});


const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
      
    }
  }));




function ProductCard() {
    const dispatch = useDispatch();
    const history = useHistory();
    const {product} = useSelector(mapState);
    const {productID} = useParams();
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
  


    
    
    
    const { productCategory,productName,productThumbnail,productThumbnail1,productThumbnail2,productThumbnail3,productPrice,productDesc,productSize,brandName,similiarProduct1Name,
            similiarProduct1Price,similiarProduct1image} = product;

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
   
    const [temp, setTemp] = ('adadasd')
    const add =({...product,backcrotch,frontcrotch,lengthofoutfit,lowerwaist,inseam,waistofloorlength,bottomlength,waist,
                    underbust,upperbust,bust,wrist,shouldertoapex,backneckdepth,frontneckdepth,scale,message,ankle,
                    calf,knee,thigh,crotch,inseemlength,skirtlength,hip,trouserlength,elbow,sherwanilength,kurtalength,
                    sleeveround,bicep,sleevelength,armhole,trouserwaist,stomach,chest,acrossback,acrossfront,shoulder,
                    neckround,height,email,userName })

    const classes = useStyles();
  


    useEffect( ()=>{
        dispatch(
             fetchProductStart(productID)
        )
        
        return  () => {
            dispatch(
                 setProduct({})
            )
        }
    },[])

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

   

    var settings = {
        // dots: true,
        arrow:true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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
    

    const handleAddToCart = (add) => {
        if (!add) return;
        dispatch(
             addProduct(add)
        );

        resetForm();
        
        history.push('/cart')
    }   

   

    const handleAddToWishlist = (product) => {
        if (!product) return;
        dispatch(
            addProducttoWishlist(product)
        );
        history.push('/wishlist')
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
          name: 'Select a Size',
          value: ''
        }, {
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
        <div className="productCard">
            
            <div className="productCCard">

            <div className="hero">
                <SliderImage 
                    data={data} 
                    width="500px" 
                    showDescription={true} 
                    direction="right" 
                    />
            </div>
            

            <div className="productDetails">
                <ul>
                    
                    <li>
                        <h1>
                            
                           {productName}
                        </h1>       
                    </li>

                    <li>
                        <div className="productType">
                             Checked cotton-blend shirt
                        </div>
                    </li>

                    <li>
                        <div className="price">
                        ₹ {productPrice}
                        

                        </div>
                        {productNname}
                    </li>

                    <li>

                        <div className="colorSize">
                            <div className="">
                                Color: Light blue
                            </div>
                            <div className="viewsize">
                                View size guide     
                            </div>
                        </div>
                        
                    </li>

                    <li>
                        <div className="">
                        <FormSelect className="firstformprocard" {...configFilters} />  
                        </div>
                    </li>
                    <li>
                        <div className="productdesscription">
                        <h4>Description:</h4>
                        <br />
                        Grey sherwani with cross stitch embroidered motifs & mandarin collar.<br />
                        Component: 1<br />
                        Embroidered<br />
                        Neckline: Mandarin<br />
                        Sleeve Length: Full<br />
                        Fabric: Raw Silk<br />
                        Color: Grey<br />
                        Closure: Concealed buttons<br />
                        Note: Inner kurta & pant worn by the model is not for sale<br />
                        
                        </div>
                    </li>
                    
                    <li>
                    <div className="callToActions">
                          <ul>
                        <li>
                            <Button className="procardButton1" onClick={() => toggleModal()}>
                                Customise your product
                            </Button>
                        </li>
                        </ul>
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
                                                    label="Height"
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

                                <Button type="submit">
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
                    </li>



                    <li>
                        <div className="addToCartprocard">
                            <Button className ="procardButton"{...configAddToCartBtn} onClick = {()=>handleAddToCart(add)} >
                                Add to cart
                            </Button>
                        </div>
                    </li>

                    <li>
                        {/* <div className="addToCartprocard">
                            <Button className ="procardButton1" {...configAddToCartBtn} onClick = {()=>handleAddToCart(product)} >
                                Add to Wishlist
                            </Button>
                        </div> */}
                    </li>
                    <br />
                   
                    <li>
                    <div className={classes.root}>
                            {/* <Accordion className="accordian">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography className="classHeading">Description</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography>
                                        <span
                                                    className="desc"
                                                    dangerouslySetInnerHTML={{ __html: productDesc }} />
                                    </Typography>
                                </AccordionDetails>
                                </Accordion> */}
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
                                    .Fits true to size, however those who are between sizes should take the larger size
                                    .Designed for a slightly loose fit
                                    .Mid-weight, slightly stretchy fabric
                                    .Model is 177cm/ 5'10" and is wearing a UK 8
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
                    </li>
                </ul>
            </div>
            </div>
            
            <div className="slider">
                    <div className="simliar">
                        You may also like
                    </div>
                    <Slider  {...settings}>
                         <Simslider {...product} /> 
                         <Simslider {...product} /> 
                         <Simslider {...product} /> 
                         <Simslider {...product} /> 
                         <Simslider {...product} /> 
                         <Simslider {...product} /> 
                    </Slider>
            </div>

            <div className="footer">
                <Footer />
            </div>
           
        </div>
    )
}

export default ProductCard
