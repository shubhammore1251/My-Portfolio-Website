import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';


const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e)=>{
       
    e.preventDefault();
    emailjs.sendForm('service_ocri3pp', 'template_52e8usl', form.current, "K6Jll_z0wKXaEZiQg")
    .then((result) => {
        console.log(result.text);
    },(error) => {
        console.log(error.text);
    });

    e.target.reset();
  }


  return (
    <>
      <div id='contact' className='contact-section'>
        
        <div className="title">
          <h2>Contact</h2>
        </div>
        
        <div className="box">

          <motion.div
            whileInView={{x:[-200,0], 
              opacity: [0,1]
            }}
            transition={{duration: 1}}
            className='contact form'
          > 
            {/* <div className="contact form"> */}
              <h3>Send a Message</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="formBox">
                      <div className="row50">
                        <div className="inputBox">
                          <span>First Name</span>
                          <input type="text" placeholder='John' name="fname" required/>
                        </div>

                        <div className="inputBox">
                          <span>Last Name</span>
                          <input type="text" placeholder='Doe' name="lname" required/>
                        </div>

                      </div>

                      <div className="row50">
                        <div className="inputBox">
                          <span>E-mail</span>
                          <input type="email" placeholder='JohnDoe@gmail.com' name="email" required/>
                        </div>

                        <div className="inputBox">
                          <span>Mob.no</span>
                          <input type="number" placeholder='+91-905-556-9710' name="mob"/>
                        </div>

                      </div>


                      <div className="row100">
                        <div className="inputBox">
                          <span>Message</span>
                          <textarea placeholder='write a message here...' name="message" required></textarea>
                        </div>

                      </div>


                      <div className="row100">
                        <div className="inputBox">
                          <input type="submit" value="Send"/>
                        </div>

                      </div>
                    </div>
                </form>
            {/* </div> */}

          </motion.div>

          <motion.div
            whileInView={{x:[200,0], 
              opacity: [0,1]
            }}
            transition={{duration: 1}}
            className='contact info'
          > 

            {/* <div className="contact info"> */}
              <h3>Contact Info</h3>
              <div className="infoBox">
                <div>
                  <span><ion-icon name="location"></ion-icon></span>
                  <p>Kalyan, Maharashtra <br/>India</p>
                </div>

                <div>
                  <span><ion-icon name="mail"></ion-icon></span>
                  <a href="mailto:shubhamp1251@gmail.com">shubhamp1251@gmail.com</a>
                </div>

                <div>
                  <span><ion-icon name="call"></ion-icon></span>
                  <a href="tel:+919167748753">9167748753</a>
                </div>

                <ul className="social-icons">

                  <li>
                    <a href="https://www.instagram.com/shubham_m_1251/" target="_blank" rel="noreferrer" >
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    
                  </li>

                  <li> 
                    <a href="https://wa.me/+919167748753" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    </a>
                    
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/shubham-more-27b41b1b8/" target="_blank" rel="noreferrer">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                    
                  </li>

                </ul>
              </div>
            {/* </div> */}
            
          </motion.div>

          <motion.div
            whileInView={{x:[200,0], 
              opacity: [0,1]
            }}
            transition={{duration: 1}}
            className='contact map'
          > 
            {/* <div className="contact map"> */}
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54440.16291331756!2d73.11368480856551!3d19.23516150571593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be796f457b1b76f%3A0x35df463ca445bd26!2sKalyan%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1649187570411!5m2!1sen!2sin" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
            {/* </div> */}
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default Contact
