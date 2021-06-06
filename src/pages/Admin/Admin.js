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
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
  const [productThumbnail1, setProductThumbnail1] = useState('');
  const [productThumbnail2, setProductThumbnail2] = useState('');
  const [productThumbnail3, setProductThumbnail3] = useState('');  
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productType, setProductType] = useState('');
  const [brandName, setBrandName] = useState('');
  const [brandimage, setBrandimage] = useState('');
  const [category, setCategory] = useState('');
  const [similiarProduct1Name, setSimiliarProduct1Name] = useState('');
  const [similiarProduct1Price,setSimiliarProduct1Price] = useState('');
  const[similiarProduct1image, setSimiliarProduct1image] = useState('');


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
        setProductCategory('mens');
        setProductName('');
        setProductThumbnail('');
        setProductThumbnail1('');
        setProductThumbnail2('');
        setProductThumbnail3('');
        setProductPrice(0);
        setProductDesc('');
        setProductSize('L');
        setProductType('');
        setSimiliarProduct1Name('');
        setSimiliarProduct1Price('');
        setSimiliarProduct1image('');
        setBrandName('');
        setBrandimage('');
    }

  const handleSubmit = e =>{
      e.preventDefault();

      dispatch(
          addProductsStart({
              productCategory,
              productName,
              productThumbnail,
              productThumbnail1,
              productThumbnail2,
              productThumbnail3,
              productPrice,
              productDesc,
              productSize,
              productType,
              brandName,
              brandimage,
              similiarProduct1Name,
              similiarProduct1Price,
              similiarProduct1image
            
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

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormSelect 
              label="ProductSize"
              options={[{
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
              }]}
              handleChange={e => setProductSize(e.target.value)}
            /> 

            <FormSelect 
              label="ProductType"
              options={[{
                value: "kurtaset",
                name: "kurtaset"
              }, {
                value: "shirt",
                name: "shirt"
              },
              {
                value: "suits",
                name: "suits"
              }, {
                value: "bandi",
                name: "bandi"
              }]}
              handleChange={e => setProductType(e.target.value)}
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
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />
            <FormInput
              label="thumb nail1"
              type="url"
              value={productThumbnail1}
              handleChange={e => setProductThumbnail1(e.target.value)}
            />
            <FormInput
              label="thumbnail2"
              type="url"
              value={productThumbnail2}
              handleChange={e => setProductThumbnail2(e.target.value)}
            />
            <FormInput
              label="thumbnail3"
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
            <hr/>
            <hr/>
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
              min="0.00"
              max="10000.00"
              step="0.01"
              value={similiarProduct1Price}
              handleChange={e => setSimiliarProduct1Price(e.target.value)}
            />

            
            

            <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            />

            <br />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

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
