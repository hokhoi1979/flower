import React from 'react'
import './Contact.scss'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import anh from '../../img/hoa1.jpg'
function Contact() {
  return (
    <>
    <Header/>
    <h3 className='ContactPage__tiltle'>Contact Us</h3>
    <br />
    <div className='row ContactPage'>
          <div className='col-md-6 ContactPage__infor'>
              <br /><br /><br />
              <div className='ContactPage__form1_2'>
                <div className='ContactPage__form1'>
                  <h3>Full Name</h3>
                  <input type="text" placeholder='Name'/>
                </div>

                <div className='ContactPage__form2'>
                    <h3>Email Address</h3>
                    <input type="text" placeholder='Email'/>
                </div>
              </div>
                <br />

              <div className='ContactPage__form3'>
                <h3>Subject</h3>   
                <input type="text" placeholder='Subject'/>          
              </div>
              <br />

              <div className='ContactPage__form4'>
                <h3>Message</h3>   
                <input type="text" placeholder='Message'/>  
              </div>

              <hr />
              <button type='secondary'>Send message</button>
          </div>
          
          <div className='col-md-6 ContactPage__img'>
            <img src={anh} alt="" />
          </div>
      </div>
      <br /><br />
    <Footer/>
    </>
  )
}

export default Contact;