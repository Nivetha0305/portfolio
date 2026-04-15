import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import { motion} from 'framer-motion'
export default function About() {


 

  return (
    <section id="about" className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-400">About Me</h2>

    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false }}
>

      <TypeAnimation
        splitter={(str) => str.split(/(?= )/)} 
        className="text-gray-300 leading-7"
        sequence={[
          " I am a Computer Science graduate passionate about building modern we applications. I specialize in React and creating responsive, user-friendly interfaces.",
          3000,
          
        ]}
        speed={{ type: "keyStrokeDelayInMs", value: 30 }}
        omitDeletionAnimation={true}
        style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
        repeat={Infinity}
        
        />
        </motion.div>
    </section>
  );
}
