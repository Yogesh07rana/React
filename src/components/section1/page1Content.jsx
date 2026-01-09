import React from 'react'
import RightContent from './rightContent'
import LeftContent from './leftContent'
const page1Content = (props) => {
  return (
    <div className='py-10 flex  gap-7 h-[90vh] items-center '>
    <LeftContent/>
    <RightContent users={props.users}/> 
    </div>
  )
}

export default page1Content