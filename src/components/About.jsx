import React from 'react'
import {motion} from 'framer-motion';


const About = ({currTheme}) => {
      return (
        <>
          <div className="about-section" id="about">

            <motion.div
              whileInView={{x:[-100,0], opacity: [0,1]}}
                transition={{duration: 0.5}}
                className="about-data about-left"
              >  
                <div>

                  {currTheme==='light'?
                    <img src="images/about-me.svg" alt="about-me-img"/>
                     :
                    <img src="images/about-me2.png" alt="about-me-img"/>
                  }
                     
                  </div>
                  
            </motion.div>
                
            <motion.div
              whileInView={{x:[100,0], opacity: [0,1]}}
              transition={{duration: 0.5}}
              className="about-data about-right"
            >
              <h3>About Me</h3>

              <p> 
                Hi, I am <b>shubham more</b> , a <b>front-end developer</b> and currently, I am pursuing&nbsp;
                <span style={{textTransform:"uppercase"}}>B.E.-IT</span>. 
                I started my front-end development journey in April 2021. 
                </p>

              <p>My point of interest in this was I loved how much effort a web developer puts in the code stuff and gives a beautiful and amazing front end, we just see the webpage we get to watch on the front side but the effort behind is so high.</p>

                     
              <p>You can connect with me on
                <i className="fi fi-brands-instagram"></i> 
                <i className="fi fi-brands-linkedin"></i>
                <i className="fi fi-brands-github"></i>
                from above.
              </p>
            </motion.div>
          </div>
        </>
      )
}

export default About
