import React from 'react'
import {motion} from 'framer-motion';


const scaleVaraints = {
    whileInView:{
        scale :[0,1],
        opacity: [0,1],
        transition: {
            duration:1,
            ease: 'easeInOut'
        }
    }
}

const Header = ({currTheme}) => {
    return (
        <>
         <div id="header" className='header header-flex'>

            <motion.div
               whileInView={{x:[-100,0], opacity: [0,1]}}
               transition={{duration: 0.5}}
               className="header-info"
            >

                <div className="header-badge" >
                    <div className="badge-cmp header-flex">

                        {currTheme==='light'?
                          <img src="images/hellorobo.png" alt="Hi"/>
                          :
                          <img src="images/hellorobo2.png" alt="Hi"/>
                        }
                        

                        <div style={{marginLeft:20}}>
                            <p className='p-text'>I am</p>
                            <h1>Shubham</h1>
                        </div>
                    </div>

                    <div className="tag-cmp header-flex">
                      <p className='p-text'>I am a Front End Web Developer</p>
                    </div>
                </div>
            </motion.div>

            
            <motion.div
             whileInView={{opacity: [0,1]}}
             transition={{duration: 0.5, delayChildren:0.5}}
             className="header-img"
            >
            
                <img src='images/shubham-more.png' alt="profilebg" width="700px" height="600px"/>
                <motion.img
                    whileInView={{scale: [0,1]}}
                    transition={{duration: 1, ease:'easeInOut'}}
                    src="images/circle.png"
                    alt="profileimg"
                    className='circle-overlay'
                />

            </motion.div>


            <motion.div
               variant={scaleVaraints}
               whileInView={scaleVaraints.whileInView}
               className='header-circles'
            >
                
                <div className='circle-cmp'>
                    <a href="https://www.linkedin.com/in/shubham-more1251/" target="_blank" rel="noreferrer">
                     <img src="images/linkedin.png" alt="linkedin"/>
                    </a>
                   
                </div>

                <div className='circle-cmp'>
                   <a href="https://github.com/more1251" target="_blank" rel="noreferrer"> 
                    
                    {currTheme==='light'?
                    <img src="images/github.png" alt="github" />
                    :
                    <img src="images/github2.png" alt="github" />
                    }
                    
                   </a>
                </div>

                <div className='circle-cmp'>
                 <a href="https://www.instagram.com/shubham_m_1251/" target="_blank" rel="noreferrer"> 
                   <img src="images/instagram.png" alt="instagram" />
                  </a>
                </div>
                   
                   
               

            </motion.div>
         </div>
        </>
    )
}

export default Header
