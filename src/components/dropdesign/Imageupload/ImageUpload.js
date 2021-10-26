import React,{useState, useEffect, useRef} from 'react'
import "./styles.scss";
import {Button} from "react-bootstrap";
import {MdModeEdit} from 'react-icons/md';

function ImageUpload(props) {
    const [file, setFile] =useState();
    const [previewUrl, setPreviewUrl] = useState();
    const filePickerRef = useRef();

    useEffect(()=>{
        if(!file){
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload=()=>{
            setPreviewUrl(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    },[file]);

    function pickedHandler(event){
        let pickedFile;
        if(event.target.files && event.target.files.length===1){
            pickedFile=event.target.files[0];
            setFile(pickedFile);
            props.setData((prev)=>{
                return{...prev,image:pickedFile}
            })
        }
    }

    function pickedImageHandler(){
        filePickerRef.current.click()
    }

    return (
        <div>
          <input id={props.id}
          ref={filePickerRef}
          style={{display:"none"}}
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={pickedHandler} />  
          <div className={`image-upload ${props.center && "center"}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img style={{width:"12rem", marginLeft:"4rem", marginBottom:"3rem"}} src={previewUrl} alt="preview" />}
                    {!previewUrl && (
                        <div className="left">
                            <Button className="image-upload-button" type="button" onClick={pickedImageHandler}>
                                Upload Image
                            </Button>
                        </div>
                    )}
                </div>
                {previewUrl && (
                    <div className="left">
                        <Button className="image-upload-button" type="button" onClick={pickedImageHandler} style={{alignItems:"left"}}>
                            <MdModeEdit className="icon"></MdModeEdit>  Edit Image
                        </Button>
                    </div>
                )}
          </div>
        </div>
        
    )
}

export default ImageUpload
