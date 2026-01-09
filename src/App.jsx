import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {
  const users =[
    {img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , intro:"" , tag:"satisfied"}
   , {img:"https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , intro:"" , tag:"underserved"}
   , {img:"https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , intro:"" , tag:"satisfied"}
    ,{img:"https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , intro:"" , tag:"satisfied"}
 
  ]
  return (
    <div>
      <Section1 users={users}></Section1>
      <Section2></Section2>
    </div>
  )
}

export default App