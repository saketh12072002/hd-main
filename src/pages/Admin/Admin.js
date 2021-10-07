import React,{useState,useEffect} from 'react'
import "./styles.scss"
import {useDispatch, useSelector} from "react-redux"

import { addProductsStart,  fetchProductsStart, deleteProductStart, fetchProductStart } from './../../redux/Products/products.actions'
import Button from './../../components/forms/Button/Button';
import FormSelect from './../../components/forms/FormSelect/FormSelect'
import FormInput from './../../components/forms/FormInput/Forminput'
import Modal from "./../../components/Modal/Modal"
import CKEditor from 'ckeditor4-react'
import LoadMore from './../../components/LoadMore/LoadMore'


const mapState = ({productsData}) => ({
  products:productsData.products
})


function Admin(props) {
  const dispatch = useDispatch();
  const {products} = useSelector(mapState);
  

  const [hideModal, setHideModal] = useState(true);
  const [productGender, setProductGender] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
  const [productThumbnail1, setProductThumbnail1] = useState('');
  const [productThumbnail2, setProductThumbnail2] = useState('');
  const [productThumbnail3, setProductThumbnail3] = useState('');  
  const [productPrice, setProductPrice] = useState(0);
  const [discountproductPrice, setDiscountproductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [productSizeandfit, setProductSizeandfit] = useState('');
  const [productWashcare, setProductWashcare] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productSubcategory, setProductSubcategory] = useState('');
  const [brandName, setBrandName] = useState('');
  const [brandimage, setBrandimage] = useState('');
  const [keywords, setKeywords] = useState('');


  const [similiarProduct1id, setSimiliarProduct1id] = useState('');
  const [similiarProduct1Name, setSimiliarProduct1Name] = useState('');
  const [similiarProduct1Price,setSimiliarProduct1Price] = useState('');
  const[similiarProduct1image, setSimiliarProduct1image] = useState('');

  const [similiarProduct2id, setSimiliarProduct2id] = useState('');
  const [similiarProduct2Name, setSimiliarProduct2Name] = useState('');
  const [similiarProduct2Price,setSimiliarProduct2Price] = useState('');
  const[similiarProduct2image, setSimiliarProduct2image] = useState('');

  const [similiarProduct3id, setSimiliarProduct3id] = useState('');
  const [similiarProduct3Name, setSimiliarProduct3Name] = useState('');
  const [similiarProduct3Price,setSimiliarProduct3Price] = useState('');
  const[similiarProduct3image, setSimiliarProduct3image] = useState('');

  const [similiarProduct4id, setSimiliarProduct4id] = useState('');
  const [similiarProduct4Name, setSimiliarProduct4Name] = useState('');
  const [similiarProduct4Price,setSimiliarProduct4Price] = useState('');
  const[similiarProduct4image, setSimiliarProduct4image] = useState('');
  const [producttionTime, setProductiontime] = useState()
 

  const { data,queryDoc,isLastPage } = products;

  useEffect(()=>{
    dispatch(fetchProductsStart());
  },[]);

  const toggleModal = () => {
      setHideModal(!hideModal)
  }

  const configModal = {
      hideModal,
      toggleModal
    }

  const resetForm = () => {
        setHideModal(true);
        setProductGender('mens');
        setProductName('');
        setProductThumbnail('');
        setProductThumbnail1('');
        setProductThumbnail2('');
        setProductThumbnail3('');
        setProductPrice(0);
        setProductDesc('');
        setProductWashcare('');
        setProductSizeandfit('');
        setProductSize('L');
        setProductCategory('');
        setProductSubcategory('');
        setBrandName('');
        setBrandimage('');
        setKeywords('');
        setSimiliarProduct1id('')
        setSimiliarProduct1Name('');
        setSimiliarProduct1Price('');
        setSimiliarProduct1image('');
        setSimiliarProduct2id('')
        setSimiliarProduct2Name('');
        setSimiliarProduct2Price('');
        setSimiliarProduct2image('');
        setSimiliarProduct3id('')
        setSimiliarProduct3Name('');
        setSimiliarProduct3Price('');
        setSimiliarProduct3image('');
        setSimiliarProduct4id('')
        setSimiliarProduct4Name('');
        setSimiliarProduct4Price('');
        setSimiliarProduct4image('');
        setProductiontime('');
    }

  const handleSubmit = e =>{
      e.preventDefault();

      dispatch(
          addProductsStart({
              productGender,
              productName,
              productThumbnail,
              productThumbnail1,
              productThumbnail2,
              productThumbnail3,
              productPrice,
              discountproductPrice,
              productDesc,
              productSizeandfit,
              productWashcare,
              productSize,
              productCategory,
              productSubcategory,
              brandName,
              brandimage,
              keywords,
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
              similiarProduct4image,
              producttionTime
            
          })
      );
      resetForm();
  }
  
  const handleloadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc ,
        persistProducts:data,

      })
    )
  }

  const configLoadMore = {
    onLoadMoreEvt:handleloadMore,
  }

  
  
  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>
      <div className="">
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Gender"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductGender(e.target.value)}
            />

            <FormSelect 
              label="ProductSize"
              options={[
                {
                  value: "XS",
                  name: "XS"
                },{
                value: "S",
                name: "S"
              },{
                value: "M",
                name: "M"
              }, {
                value: "L",
                name: "L"
              },
              {
                value: "XL",
                name: "XL"
              }, {
                value: "XXL",
                name: "XXL"
              },{
                value: "XXL",
                name: "XXL"
              },]}
              handleChange={e => setProductSize(e.target.value)}
            /> 

            <FormSelect 
              label="Product Categories"
              options={[{
                value: "shirts",
                name: "shirts"
              }, {
                value: "trousers",
                name: "trousers"
              },
              {
                value: "kurta",
                name: "kurta"
              }, {
                value: "kurta set",
                name: "kurta set"
              }, {
                value: "skirt",
                name: "skirt"
              }, {
                value: "tops",
                name: "tops"
              }, {
                value: "dresses",
                name: "dresses"
              }, {
                value: "kaftan",
                name: "kaftan"
              }, {
                value: "lehanga",
                name: "lehanga"
              }, {
                value: "three piece set",
                name: "three piece set"
              }, {
                value: "jackets",
                name: "jackets"
              }, {
                value: "sarees",
                name: "sarees"
              }, {
                value: "",
                name: ""
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            /> 

<FormSelect 
              label="Product Sub Categories"
              options={[{
                value: "crop top",
                name: "crop top"
              }, {
                value: "basic top",
                name: "basic top"
              },
              {
                value: "ethinic top",
                name: "ethinic top"
              }, {
                value: "straight",
                name: "straight"
              }, {
                value: "flared",
                name: "flared"
              }, {
                value: "aline",
                name: "aline"
              }, {
                value: "maxi dress",
                name: "maxi dress"
              }, {
                value: "floor length",
                name: "floor length"
              }, {
                value: "casual wear",
                name: "casual wear"
              }, {
                value: "formal wear",
                name: "formal wear"
              }, {
                value: "party wear",
                name: "party wear"
              }, {
                value: "festive wear",
                name: "festive wear"
              }, {
                value: "wedding wear",
                name: "wedding wear"
              }, {
                value: "contemporary wear",
                name: "contemporary wear"
              }, {
                value: "palazo",
                name: "palazo"
              }, {
                value: "",
                name: ""
              },]}
              handleChange={e => setProductSubcategory(e.target.value)}
            /> 
            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />
            <FormInput
              label="brandName"
              type="text"
              value={brandName}
              handleChange={e => setBrandName(e.target.value)}
            />
            <FormInput
              label="brandImage"
              type="text"
              value={brandimage}
              handleChange={e => setBrandimage(e.target.value)}
            />
            <FormInput
              label="product image 1"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="product image 2"
              type="url"
              value={productThumbnail1}
              handleChange={e => setProductThumbnail1(e.target.value)}
            />
            <FormInput
              label="product image 3"
              type="url"
              value={productThumbnail2}
              handleChange={e => setProductThumbnail2(e.target.value)}
            />
            <FormInput
              label="product image 4"
              type="url"
              value={productThumbnail3}
              handleChange={e => setProductThumbnail3(e.target.value)}
            />
            <FormInput
              label="Price"
              type="number"
              min="0"
              max="100000000"
              step="1"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />
            <FormInput
              label="discountPrice"
              type="number"
              min="0"
              max="100000000"
              step="1"
              value={discountproductPrice}
              handleChange={e => setDiscountproductPrice(e.target.value)}
            />
            <hr/>
            <hr/>
  
            <FormInput
              label="productionTime"
              type="text"
              value={producttionTime}
              handleChange={e => setProductiontime(e.target.value)}
            />
    


            <FormInput
              label="SimiliarProduct1id"
              type="text"
              value={similiarProduct1id}
              handleChange={e => setSimiliarProduct1id(e.target.value)}
            />
            <FormInput
              label="SimiliarProduct1Name"
              type="text"
              value={similiarProduct1Name}
              handleChange={e => setSimiliarProduct1Name(e.target.value)}
            />
            <FormInput
              label="similiarProduct1image"
              type="url"
              value={similiarProduct1image}
              handleChange={e => setSimiliarProduct1image(e.target.value)}
            />
            <FormInput
              label="similiarProduct1Price"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={similiarProduct1Price}
              handleChange={e => setSimiliarProduct1Price(e.target.value)}
            />


<FormInput
              label="SimiliarProduct2id"
              type="text"
              value={similiarProduct2id}
              handleChange={e => setSimiliarProduct2id(e.target.value)}
            />
            <FormInput
              label="SimiliarProduct2Name"
              type="text"
              value={similiarProduct2Name}
              handleChange={e => setSimiliarProduct2Name(e.target.value)}
            />
            <FormInput
              label="similiarProduct2image"
              type="url"
              value={similiarProduct2image}
              handleChange={e => setSimiliarProduct2image(e.target.value)}
            />
            <FormInput
              label="similiarProduct2Price"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={similiarProduct2Price}
              handleChange={e => setSimiliarProduct2Price(e.target.value)}
            />

<FormInput
              label="SimiliarProduct3id"
              type="text"
              value={similiarProduct3id}
              handleChange={e => setSimiliarProduct3id(e.target.value)}
            />
            <FormInput
              label="SimiliarProduct3Name"
              type="text"
              value={similiarProduct3Name}
              handleChange={e => setSimiliarProduct3Name(e.target.value)}
            />
            <FormInput
              label="similiarProduct3image"
              type="url"
              value={similiarProduct3image}
              handleChange={e => setSimiliarProduct3image(e.target.value)}
            />
            <FormInput
              label="similiarProduct3Price"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={similiarProduct3Price}
              handleChange={e => setSimiliarProduct3Price(e.target.value)}
            />

<FormInput
              label="SimiliarProduct4id"
              type="text"
              value={similiarProduct4id}
              handleChange={e => setSimiliarProduct4id(e.target.value)}
            />
            <FormInput
              label="SimiliarProduct4Name"
              type="text"
              value={similiarProduct4Name}
              handleChange={e => setSimiliarProduct4Name(e.target.value)}
            />
            <FormInput
              label="similiarProduct4image"
              type="url"
              value={similiarProduct4image}
              handleChange={e => setSimiliarProduct4image(e.target.value)}
            />
            <FormInput
              label="similiarProduct4Price"
              type="number"
              min="0"
              max="1000000"
              step="1"
              value={similiarProduct4Price}
              handleChange={e => setSimiliarProduct4Price(e.target.value)}
            />
          <FormInput
              label="Keywords"
              type="text"
              value={keywords}
              handleChange={e => setKeywords(e.target.value)}
            />

            <div className="descdetails">Product Description</div>
              <CKEditor
                onChange={evt => setProductDesc(evt.editor.getData())}
              />
           
           <div className="descdetails">Product Size and fit</div>
            
              <CKEditor
                onChange={evt => setProductSizeandfit(evt.editor.getData())}
              />
             <div className="descdetails">Product Wash care </div>
            <CKEditor
              onChange={evt => setProductWashcare(evt.editor.getData())}
            />
            

        

            <br />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>
      </div>

      

      <div className="manageProducts">
          <table border="0" cellPadding="0" cellSpacing="0" >
            <tbody>
              <tr>
                <th>
                  <h1>
                    Manage Products
                  </h1>
                </th>
              </tr>
              <tr>
                <td>
                  <table className="results" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {(Array.isArray(data) && data.length >0) && data.map((product, index)=> {

                            const {
                              productName,
                              productThumbnail,
                              productPrice,
                              documentID
                            } = product;
                            return (
                              <tr key={index}>
                                <td>
                                    <img className="thumb" src={productThumbnail} />
                                </td>
                                <td>
                                  {productName}
                                </td>
                                <td>
                                  ${productPrice} 
                                </td>
                                <td>
                                  <button onClick={()=>dispatch(deleteProductStart(documentID))}>
                                    DELETE
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>

                </td>
              </tr>
              <tr>
                <td>
                  < table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {!isLastPage && <LoadMore {...configLoadMore}/>}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                </td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
}
    

export default Admin
