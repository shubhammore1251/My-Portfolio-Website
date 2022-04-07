import React from 'react'
import {motion} from 'framer-motion';
import { skillsList } from '../data/skillsList';

const Skills = () => {
  return (
    <>
      <div id='tech' className='skills-section'>
          
          <h1>Tech</h1>
          <motion.div
            whileInView={{x:[-100,0], 
              opacity: [0,1]
            }}
            transition={{duration: 1}}
            className='skills-grid'
          >
          {skillsList.map((ele)=>(
            
            <div className="skills-div" key={ele.id}>  
              <div className='skills-map'>
                <img src={ele.icon} alt="skills-icon" />
                <h3 className={ele.h1_classname}>{ele.name}</h3>
              </div>
            </div>
          ))
          
          
          }
    
          </motion.div>


      </div>

    </>
  )
}

export default Skills