import React from 'react'
import './styles.css'
import contact from './../../assets/contact.jpg'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import SendIcon from '@material-ui/icons/Send';


function Dropdesign() {
    return (
        <div className="droppcontainter">
            
            <div className="droppimage">
                <img src={contact} />
                </div>
            
            
                <div className="dropback">
                <form className='droppform'>
                <div className="category">

                    <div className="droppheader">
                        <span className="droplike">Like some design?</span><br /><br /> Share it with us and we will make it for you
                        <hr />
                        
                    </div>
           
                        <div className="chooseheader">
                            Choose category
                        </div>
                        <div className="d-flex flex-wrap">
                            <input type="radio" id="suits" name="suits" value="male" />
                            <label class="custom-radio" for="suits">Suits</label><br/>
                            <input type="radio" id="sherwani" name="sherwani" value="male"  />
                            <label custom-radio for="sherwani">Sherwani</label><br/>
                            <input type="radio" id="Indo western" name="indowestern" value="male" />
                            <label custom-radio for="Indo western">IndoWestern</label><br/>
                            <input type="radio" id="bandi" name="bandi" value="male"  />
                            <label custom-radio for="bandi">Bandi</label><br/>

                            <input type="radio" id="Kurta" name="kurta" value="male" />
                            <label custom-radio for="Kurta">Kurta</label><br/>
                            <input type="radio" id="Shirts" name="shirts" value="male"  />
                            <label custom-radio for="Shirts">Shirts</label><br/>
                            <input type="radio" id="Trousers" name="trousers" value="male" />
                            <label custom-radio for="Trousers">Trousers</label><br/>
                            <input type="radio" id="Chinos" name="chinos" value="male" />
                            <label custom-radio for="Chinos">Chinos</label><br/>
                        </div>
                        
                    </div>
                    <br />
                    <div className="category">
                        <div className="chooseheader">
                                Your Budget
                        </div>
                        <div className="flex-wrap">
                                <input type="radio" id="1000" name="gtten" value="gtten" />
                                <label class="custom-radio" for="1000">10000+</label><br/>
                                <input type="radio" id="2000" name="gttwenty" value="gttwenty"  />
                                <label custom-radio for="2000">20000+</label><br/>
                                <input type="radio" id="3000" name="gtthirty" value="gtthirty"  />
                                <label custom-radio for="3000">30000+</label><br/>
                                <input type="radio" id="50000" name="gtfifty" value="gtfifty" />
                                <label custom-radio for="40000">50000+</label><br/>
                        </div>
                        
                    </div>
                    <hr />

                    <div className="mail">
                        
                    <a href='https://www.instagram.com/thehaberdasherco/'>
                    Share your images <SendIcon /> 
                    </a>
                    </div>
                    
                    <div className='dropform-inputs'>
          <div className='form-labels'>reference image link 1</div>
            <input
              className='dropform-input'
              type='email'
              name='email'
              placeholder=''
            
            />
        
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>reference image link 2</div>
            <input
              className='dropform-input'
              type='email'
              name='email'
              placeholder=''
            
            />
        
          </div>
                    <div className='dropform-inputs'>
            <div className='form-labels'>Name</div>
            <input
              className='dropform-input'
              type='email'
              name='name'
              placeholder=''
            
            />
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Email</div>
            <input
              className='dropform-input'
              type='email'
              name='email'
              placeholder=''
            
            />
        
          </div>
          <div className='dropform-inputs'>
          <div className='form-labels'>Mobile *</div>
            <input
              className='dropform-input'
              type='email'
              name='phone'
              placeholder=''
            
            />
        
          </div>
          </form>
                </div>
            
        </div>
    )
}

export default Dropdesign
