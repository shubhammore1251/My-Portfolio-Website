import React from "react";
import { motion } from "framer-motion";
import { skillsList } from "../data/skillsList";

const Skills = () => {
  return (
    <>
      <div id="tech" className="skills-section">
        <div className="tech-div">
          <h1>Tech-Stack</h1>

          <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="skills-grid"
        >
          {skillsList.map((ele) => (
            <div className="skills-div" key={ele.id}>
              <img
                  src={ele.icon}
                  alt={ele.name}
                  className={ele.img_classname}
              />
            </div>
          ))}
        </motion.div>
        </div>
       
      </div>
    </>
  );
};

export default Skills;
