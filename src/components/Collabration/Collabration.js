import React from 'react'
import './style/colab.css'
import Button from './../forms/Button/Button'
import emailjs from 'emailjs-com';
import Footer from '../Footer/Footer';
import './../Appointment/css/appointment.css'

function Collabration() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_g6rbvtg', 'template_oysmbvj', e.target, 'user_uh9FZHGEceRQL50NMAOUV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }


    return (
    
      <div className="apdrcontainer">
            <div className="heading">
                    <h1>
                        Collabrate with us
                    </h1>
                    <p>
                    Find the perfect present or create your personalized look with the help of our staff. Book an appointment now in a Valentino boutique.
                    </p>
            </div>
            <div className="Enterdetails">
            <form   onSubmit = {sendEmail} className='form' >
                <h1 className="enterdetail">
                    Enter your details
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Name</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='name'
                        required="required"
                        
                      />
                </div>

                
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Email'
                        
                        
                        />
                    
                    </div>

                    <div className='form-inputs'>
            <label className='form-label'>Phone*</label>
            <input
              className='form-input'
              type='phone'
              name='phone'
              placeholder='Phone'
              required="required"
            />
          
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Specialization</label>
            <input
              className='form-input'
              type='text'
              name='specialization'
              placeholder='Specialization'
              required="required"
            />
            
          
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Website</label>
            <input
              className='form-input'
              type='text'
              name='website'
              placeholder='link'
              required="required"
            />
            
          
          </div>
          <div className='form-inputs'>
            <label className='form-label'>Instagram</label>
            <input
              className='form-input'
              type='text'
              name='instagram'
              placeholder='link'
              required="required"
            />
            
          
          </div>
          
          <div className='form-inputs'>
            {/* <label className='form-label'>LEAVE A MESSAGE</label> */}
            <textarea name="message" rows="10" cols="30">
             Leave a message for us
          </textarea>
          
          </div>
          <Button className='form-input-btn' type='submit'>
            Start the journey
          </Button>
            </form>
        </div>
        </div>
    )
}

export default Collabration

