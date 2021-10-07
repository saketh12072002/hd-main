import React,{useState,useEffect} from 'react'
import "./styles.scss"
import {useDispatch, useSelector} from "react-redux"

import { addDesignersStart,  fetchDesignersStart, deleteDesignerStart, fetchDesingerStart } from '../../redux/Designer/designers.actions'
import Button from './../../components/forms/Button/Button';
import FormSelect from './../../components/forms/FormSelect/FormSelect'
import FormInput from './../../components/forms/FormInput/Forminput'
import Modal from "./../../components/Modal/Modal"
import CKEditor from 'ckeditor4-react'
import LoadMore from './../../components/LoadMore/LoadMore'


const mapState = ({designersData}) => ({
  designers:designersData.designers
})


function DesignersData(props) {
  const dispatch = useDispatch();
  const {designers} = useSelector(mapState);
  

  const [hideModal, setHideModal] = useState(true);
  const [designerPicture, setDesignerPicture] = useState('');
  const [desingerName, setDesignerName] = useState('');
  const [designerInfo, setDesignerInfo] = useState('');
  const [instaLink, setInstaLink] = useState('');
  const [fbLink, setFbLink] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [pinterestLink, setPinterestLink] = useState('');
  
  
  useEffect(()=>{
    dispatch(fetchDesignersStart());
  },[]);

  const toggleModal = () => {
      setHideModal(!hideModal)
  }

  const configModal = {
      hideModal,
      toggleModal
    }

  const resetForm = () => {
        setDesignerInfo('');
        setDesignerName('');
        setDesignerPicture('');
        setFbLink('');
        setInstaLink('');
        setPinterestLink('');
        setYoutubeLink('');

    }

  const handleSubmit = e =>{
      e.preventDefault();

      dispatch(
          addDesignersStart({
              designerPicture,
              designerInfo,
              desingerName,
              fbLink,
              youtubeLink,
              instaLink,
              pinterestLink,
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
              Add new Designer info
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
              label="designerPictureurl"
              type="text"
              value={designerPicture}
              handleChange={e => setDesignerPicture(e.target.value)}
            />
            <FormInput
              label="desingerName"
              type="text"
              value={desingerName}
              handleChange={e => setDesignerName(e.target.value)}
            />
            <FormInput
              label="designerInfo"
              type="text"
              value={designerInfo}
              handleChange={e => setDesignerInfo(e.target.value)}
            />
            <FormInput
              label="fbLink"
              type="text"
              value={fbLink}
              handleChange={e => setFbLink(e.target.value)}
            />
            <FormInput
              label="youtubeLink"
              type="text"
              value={youtubeLink}
              handleChange={e => setYoutubeLink(e.target.value)}
            />
            <FormInput
              label="instaLink"
              type="text"
              value={instaLink}
              handleChange={e => setInstaLink(e.target.value)}
            />
            <FormInput
              label="pinterestLink"
              type="text"
              value={pinterestLink}
              handleChange={e => setPinterestLink(e.target.value)}
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
                    Manage Designers
                  </h1>
                </th>
              </tr>
              <tr>
                <td>
                  <table className="results" border="0" cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {(Array.isArray(designers) && designers.length >0) && designers.map((designer, index)=> {

                            const {
                              blogPicture,
                              blogDate,
                              blogTitle,
                              documentID
                            } = designer;
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
                                  <button onClick={()=>dispatch(deleteDesignerStart(documentID))}>
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
    

export default DesignersData
