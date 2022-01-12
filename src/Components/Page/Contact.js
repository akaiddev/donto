import React, { Component } from 'react'
import Banner from '../Banner'

class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner pageTitle='Contact Us' />

        <section className='contact-us-wrapper section-padding'>
          <div className='contact-information'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6 col-xl-4 col-md-6 col-12'>
                  <div className='single-contact-info icon1'>
                    <div className='c-icon'>
                      <i className='fal fa-home' />
                    </div>
                    <div className='c-info'>
                      <h4>Address</h4>
                      <p>Mirpur Dhaka</p>
                      <p>6th Floor, Bangladesh</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-xl-4 col-md-6 col-12'>
                  <div className='single-contact-info icon2'>
                    <div className='c-icon'>
                      <i className='fal fa-envelope' />
                    </div>
                    <div className='c-info'>
                      <h4>email</h4>
                      <p>akaid.dev@gmail.com</p>
                      <p>help@akaid.com</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-xl-4 col-md-6 col-12'>
                  <div className='single-contact-info icon3'>
                    <div className='c-icon'>
                      <i className='fal fa-phone-volume' />
                    </div>
                    <div className='c-info'>
                      <h4>Phone</h4>
                      <p>(+88) 01705952160</p>
                      <p>(+88) 01722071791</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-form-wraper'>
            <div className='container'>
              <h1>Get In Touch</h1>
              <form className='row'>
                <div className='col-lg-6 col-md-6 col-12'>
                  <input type='text' placeholder='name' />
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                  <input type='email' placeholder='email' />
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                  <input type='text' placeholder='phone' />
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                  <input type='text' placeholder='subject' />
                </div>
                <div className='col-lg-12 col-12'>
                  <textarea name='message' placeholder='message' defaultValue={''} />
                </div>
                <button className='contact-submit-btn' type='submit'>
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default Contact
