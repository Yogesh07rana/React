import React from 'react'
import Navbar from './navbar'
import Page1Content from './page1Content'
const section1 = (props) => {
  return (
    <div className="h-screen w-full "> 
    <Navbar></Navbar>
    <Page1Content users={props.users}>
    </Page1Content>
    </div>
  )
}

export default section1