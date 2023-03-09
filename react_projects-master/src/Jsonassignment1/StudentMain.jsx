import React from 'react'
import JSON from "./Student.json"
import Studentchild from "./Studentchild"
import Student from "./Student.css"

const StudentMain = () => {
  return (
    <>
    <div>StudentMain</div>
    <Studentchild data={JSON}/>

    </>
  )
}

export default StudentMain