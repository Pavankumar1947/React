import React from "react";



const Playerchild = (props) => {
  return (
    
    <div className="pblock">
        
        <div className="mblock">
            {/* <img src={props.data[4].studentImg} alt="2"/> */}
            <h2>{props.data[3].Name}</h2>
            <h3>{props.data[3].Team}</h3>
            <h3>{props.data[3].Role}</h3>
            <h3>{props.data[3].Best}</h3>
        </div>
        <div className="mblock">
            {/* <img src={props.data[4].studentImg} alt="2"/> */}
            <h2>{props.data[2].Name}</h2>
            <h3>{props.data[2].Team}</h3>
            <h3>{props.data[2].Role}</h3>
            <h3>{props.data[2].Best}</h3>
        </div>
        <div className="mblock">
            {/* <img src={props.data[4].studentImg} alt="2"/> */}
            <h2>{props.data[0].Name}</h2>
            <h3>{props.data[0].Team}</h3>
            <h3>{props.data[0].Role}</h3>
            <h3>{props.data[0].Best}</h3>
        </div>
        <div className="mblock">
            {/* <img src={props.data[4].studentImg} alt="2"/> */}
            <h2>{props.data[1].Name}</h2>
            <h3>{props.data[1].Team}</h3>
            <h3>{props.data[1].Role}</h3>
            <h3>{props.data[1].Best}</h3>
        </div>
        
    </div>
    
  )
}
export default Playerchild;