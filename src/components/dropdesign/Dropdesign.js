import React,{useState} from 'react'
import './styles.css'
import contact from './../../assets/contact.jpg'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SendIcon from '@material-ui/icons/Send';
import ImageUpload from './Imageupload/ImageUpload'
import Button from './../../components/forms/Button/Button'
import {firestore,storage} from './../../firebase/utils'
import DropSubmit from './dropSubmit/DropSubmit';



function Dropdesign() {
const [confirm, setConfirm] = useState(false)

const [data,setData] =useState({
    name:"",
    email:"",
    mobile:"",
    type:"",
    link:"",
    links:"",
    budget:"",
    image:null

    
  });
  

  function HandleChange(e){
    e.preventDefault()
    const {name, value} =e.target;
    setData((prev)=>{
      return{...prev,[name]:value};
    })
  }

  function submitDesign(e){
    e.preventDefault();
    const uploadTask= storage.ref("dropDesign/" + data.image.name).put(data.image);
    uploadTask.on("state_changed",(snapshot)=>{
      let progress;
      progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log(progress);
    },
    (err)=>{
      console.log(err);
    },
    async ()=>{
     await storage.ref("dropDesign").child(data.image.name).getDownloadURL()
      .then((imageUrl)=>{
          firestore.collection("dropData")
          .doc(data.name)
          .set({
            name:data.name,
            email:data.email,
            mobile:data.mobile,
            type:data.type,
            link:data.link,
            links:data.links,
            budget:data.budget,
            image:imageUrl
          }).then(()=>{
            setConfirm(true)
            
          }).then(()=>{
            setData({
              name:"",
              email:"",
              mobile:"",
              type:"",
              link:"",
              links:"",
              budget:"",
              image:null
            })
          }).then(()=>{
            // setConfirm('false')
            setInterval(()=>{
              setConfirm(false)
            },2000)
          })
      })
    }
    )}
    return (
        <div className="droppcontainter">
            
            <div className="droppimage">
                <img src={contact} />
                </div>
            
            
                <div className="dropback">
                <form action ="#" className='droppform'>
                <div className="category">

                    <div className="droppheader">
                        <span className="droplike">Like some design?</span><br /><br /> Share it with us and we will make it for you
                        <hr />
                        
                    </div>
           
                        <div className="chooseheader">
                            Choose category
                        </div>
                        <div className="d-flex flex-wrap">
                            <input onChange={HandleChange} type="radio" id="suits" name="suits" value="male" value={data.type} />
                            <label class="custom-radio" for="suits">Suits</label><br/>
                            <input onChange={HandleChange} type="radio" id="sherwani" name="sherwani" value="male" value={data.type} />
                            <label custom-radio for="sherwani">Sherwani</label><br/>
                            <input onChange={HandleChange} type="radio" id="Indo western" name="indowestern" value="male" value={data.type} />
                            <label custom-radio for="Indo western">IndoWestern</label><br/>
                            <input onChange={HandleChange} type="radio" id="bandi" name="bandi" value="male" value={data.type}  />
                            <label custom-radio for="bandi">Bandi</label><br/>

                            <input onChange={HandleChange} type="radio" id="Kurta" name="kurta" value="male" value={data.type}/>
                            <label custom-radio for="Kurta">Kurta</label><br/>
                            <input onChange={HandleChange} type="radio" id="Shirts" name="shirts" value="male"  value={data.type}/>
                            <label custom-radio for="Shirts">Shirts</label><br/>
                            <input onChange={HandleChange} type="radio" id="Trousers" name="trousers" value="male" value={data.type} />
                            <label custom-radio for="Trousers">Trousers</label><br/>
                            <input onChange={HandleChange} type="radio" id="Chinos" name="chinos" value="male" value={data.type} />
                            <label custom-radio for="Chinos">Chinos</label><br/>
                        </div>
                        
                    </div>
                    
                    <br />
                    <div className="category">
                        <div className="chooseheader">
                                Your Budget
                        </div>
                        <div className="flex-wrap">
                                <input onChange={HandleChange} type="radio" id="1000" name="gtten" value={data.budget} />
                                <label class="custom-radio" for="1000">10000+</label><br/>
                                <input onChange={HandleChange} type="radio" id="2000" name="gttwenty" value={data.budget}  />
                                <label custom-radio for="2000"> 20000+</label><br/>
                                <input onChange={HandleChange} type="radio" id="3000" name="gtthirty" value={data.budget}  />
                                <label custom-radio for="3000"> 30000+</label><br/>
                                <input onChange={HandleChange} type="radio" id="50000" name="gtfifty" value={data.budget} />
                                <label custom-radio for="40000">50000+</label><br/>
                        </div>
                        
                    </div>
                    <hr />
                    
                    <div className="mail">
                    <br />
                    <br />
                        
                      <ImageUpload setData={setData} />
                    <br />
                    <br />
                    <br /> 
                    </div>
                    <div className="confirmNote">
                        {confirm ? <DropSubmit /> : ""}
                    </div>
                    
                    <div className='dropform-inputs'>
          <div className='form-labels'>reference image link 1</div>
            <input
              className='dropform-input'
              type='URL'
              name='link'
              placeholder=''
              value={data.link}
              onChange={HandleChange}
            
            />
        
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>reference image link 2</div>
            <input
              className='dropform-input'
              type='URL'
              name='links'
              placeholder=''
              value={data.links}
              onChange={HandleChange}
            
            />
        
          </div>
                    <div className='dropform-inputs'>
            <div className='form-labels'>Name</div>
            <input
              className='dropform-input'
              type='email'
              name='name'
              placeholder=''
              value={data.name}
              onChange={HandleChange}
            
            />
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Email</div>
            <input
              className='dropform-input'
              type='email'
              name='email'
              placeholder=''
              value={data.email}
              onChange={HandleChange}
            
            />
        
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Mobile *</div>
            <input
              className='dropform-input'
              type='phone'
              name='mobile'
              placeholder=''
              value={data.mobile}
              onChange={HandleChange}
            
            />
        
          </div>
          <br />
          <br />
          <br /><br />
          <Button onClick={submitDesign}>Submit</Button>
          </form>
                </div>
            
        </div>
    )
}

export default Dropdesign