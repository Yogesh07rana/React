import React from 'react'
import RightCard from './RightCard'
const rightContent = (props) => {
  return (
     <div className='h-full gap-7 flex overflow-x-auto flex-nowrap w-2/3 p-4 '>
     
       {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} />
       })}

     </div>
  )
}

export default rightContent