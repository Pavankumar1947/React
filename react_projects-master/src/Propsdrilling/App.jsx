import React from 'react'
import Course from './Course';

const App = () => {
  return (
   < Course  courseDetails={{
    courseName:"MERN STACK",
    courseAvail:true,
    courseDuration:"2 months"

   }}/>
  )
}

export default App
