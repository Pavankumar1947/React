import React from 'react'
import Net from "./Net.css"

const Main = () => {
  return (
    <>
    <nav id='hi'>
    <div className='pushpa'>
    <img id="logoimg" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"></img>
        <div id='navya'>
        <select className='pushpa1'>
          <option>English</option>
          <option>Kannada</option>
          <option>Hindi</option>
        </select>
        <button className='signin'>Sign In</button>
      </div>
      </div>
      </nav>
    </>
  )
}
export default Main;