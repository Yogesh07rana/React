import React from 'react'
import 'remixicon/fonts/remixicon.css'
const RightCardContent = (props) => {
  return (
    <div className='absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full  '>
        <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center text-2xl font-semibold'>{props.id +1}</h2>
        <div >
          <p className='text-lg leading-relaxed text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse, facere excepturi obcaecati ipsum incidunt.</p>
        <div className='flex justify-between gap-6'> 
          <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full  '>Satisfied</button>
        <button  className='bg-blue-600 text-white font-semibold px-3 py-3 rounded-full '  ><i className="ri-arrow-right-line"></i></button>
        </div>
        </div>

      </div>
    
  )
}

export default RightCardContent