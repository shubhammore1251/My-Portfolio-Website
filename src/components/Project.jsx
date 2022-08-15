import React from 'react'
import {motion} from 'framer-motion';
import { ProjectList } from '../data/ProjectList';


const Project = () => {
    
    const handleClick = ()=>{
        window.open("https://github.com/more1251?tab=repositories");
    }

    return (

        <>
            <div className="projects" id='projects'>
            <h2>Projects</h2>
                    
                {ProjectList.map((ele)=>(

                    <motion.div
                        whileInView={{x:[100,0], 
                            opacity: [0,1]
                        }}
                        transition={{duration: 1}}
                        className='project-div'
                        key={ele.id}
                    >

                        <div className="project-block">
                            <div className="left-block">
                                <img src={ele.thumbnail} alt={ele.name} />
                            </div>

                            <div className="right-block">

                                <div className="right-text">
                                    <h3>{ele.name}</h3>
                                    <p>{ele.desc}</p>
                                </div>
                                
                                
                                <div className="iconandbutton">
                                    <div className='tech-icons'>
                                        {ele.tech.map((item)=>(
                                                
                                            <img src={item.img} alt={item.id} key={item.id}/>
                                        ))}
                                            
                                    </div>
                                            
                                    <a href={ele.demo_link} target="_blank" rel="noreferrer" className='d-flex button-33 flex-column'>Demo</a>
                                </div>
                               
                                        
                            </div>
                        </div>
                    </motion.div>
                ))}
            
            <button className='see-more' onClick={handleClick}>SEE MORE</button>
            </div>  
        </>
    )
}

export default Project
