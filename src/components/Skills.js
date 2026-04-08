import React from 'react'

import SplitText from '../components/Splittext';
export default function Skills () {
  return (
    <div>
  
      <section id="skills" className="py-20 text-center">
       
       <SplitText      className="text-3xl font-bold mb-10 text-blue-400" text="Skills"
     />
          <div className="flex justify-center flex-wrap gap-6">
            <div className="bg-gray-800 px-6 py-3 rounded-lg">HTML</div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">CSS</div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">JavaScript</div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">React</div>
            <div className="bg-gray-800 px-6 py-3 rounded-lg">Tailwind</div>
          </div>
        
      </section>
    </div>
  );
}
