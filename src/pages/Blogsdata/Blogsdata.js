import React,{useState,useEffect} from 'react'
import "./styles.scss"
import {useDispatch, useSelector} from "react-redux"

import { addBlogsStart,  fetchBlogsStart, deleteBlogStart, fetchBlogStart } from '../../redux/Blog/blogs.actions'
import Button from './../../components/forms/Button/Button';
import FormSelect from './../../components/forms/FormSelect/FormSelect'
import FormInput from './../../components/forms/FormInput/Forminput'
import Modal from "./../../components/Modal/Modal"
import CKEditor from 'ckeditor4-react'
import LoadMore from './../../components/LoadMore/LoadMore'


const mapState = ({blogsData}) => ({
  blogs:blogsData.blogs
})


function Blogsdata(props) {
  const dispatch = useDispatch();
  const {blogs} = useSelector(mapState);
  

  const [hideModal, setHideModal] = useState(true);
  const [blogPicture, setBlogPicture] = useState('');
  const [blogDate, setBlogDate] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  

  useEffect(()=>{
    dispatch(fetchBlogsStart());
  },[]);

  const toggleModal = () => {
      setHideModal(!hideModal)
  }

  const configModal = {
      hideModal,
      toggleModal
    }

  const resetForm = () => {
        setBlogPicture('');
        setBlogDate('');
        setBlogTitle('');

    }

  const handleSubmit = e =>{
      e.preventDefault();

      dispatch(
          addBlogsStart({
              blogPicture,
              blogDate,
              blogTitle
          })
      );
      resetForm();
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
        <div className="addNewProductF,orm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormInput
              label="url"
              type="text"
              value={blogPicture}
              handleChange={e => setBlogPicture(e.target.value)}
            />
            <FormInput
              label="date"
              type="text"
              value={blogDate}
              handleChange={e => setBlogDate(e.target.value)}
            />
            <FormInput
              label="title"
              type="text"
              value={blogTitle}
              handleChange={e => setBlogTitle(e.target.value)}
            />

            
            

            {/* <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            /> */}

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
                          {(Array.isArray(blogs) && blogs.length >0) && blogs.map((blog, index)=> {

                            const {
                              blogPicture,
                              blogDate,
                              blogTitle,
                              documentID
                            } = blog;
                            return (
                              <tr key={index}>
                                <td>
                                    <img className="thumb" src={blogPicture} />
                                </td>
                                <td>
                                  {blogTitle}
                                </td>
                                <td>
                                  ${blogDate} 
                                </td>
                                <td>
                                  <button onClick={()=>dispatch(deleteBlogStart(documentID))}>
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
                          {/* {!isLastPage && <LoadMore {...configLoadMore}/>} */}
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
    

export default Blogsdata
