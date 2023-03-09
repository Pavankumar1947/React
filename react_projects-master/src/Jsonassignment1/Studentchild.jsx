import React from "react";



const Studentchild = (props) => {
  return (
    <>
    <div>
        <div>
            <img src={props.data[0].studentImg}/>
            <h2>{props.data[0].studentName}</h2>
            <h3>{props.data[0].phoneNo}</h3>
            <h3>{props.data[0].qualification}</h3>
            <h3>{props.data[0].YOP}</h3>
            <h3>{props.data[0].skills}</h3>
            <h3>{props.data[0].Througout}</h3>
        </div>
        <div>
            <img src={props.data[1].studentImg}/>
            <h2>{props.data[1].studentName}</h2>
            <h3>{props.data[1].phoneNo}</h3>
            <h3>{props.data[1].qualification}</h3>
            <h3>{props.data[1].YOP}</h3>
            <h3>{props.data[1].skills}</h3>
            <h3>{props.data[1].Througout}</h3>
        </div>
        <div>
            <img src={props.data[2].studentImg}/>
            <h2>{props.data[2].studentName}</h2>
            <h3>{props.data[2].phoneNo}</h3>
            <h3>{props.data[2].qualification}</h3>
            <h3>{props.data[2].YOP}</h3>
            <h3>{props.data[2].skills}</h3>
            <h3>{props.data[2].Througout}</h3>
        </div>
        <div>
            <img src={props.data[3].studentImg}/>
            <h2>{props.data[3].studentName}</h2>
            <h3>{props.data[3].phoneNo}</h3>
            <h3>{props.data[3].qualification}</h3>
            <h3>{props.data[3].YOP}</h3>
            <h3>{props.data[3].skills}</h3>
            <h3>{props.data[3].Througout}</h3>
        </div>
        <div>
            <img src={props.data[4].studentImg}/>
            <h2>{props.data[4].studentName}</h2>
            <h3>{props.data[4].phoneNo}</h3>
            <h3>{props.data[4].qualification}</h3>
            <h3>{props.data[4].YOP}</h3>
            <h3>{props.data[4].skills}</h3>
            <h3>{props.data[4].Througout}</h3>
        </div>
        <div>
            <img src={props.data[5].studentImg}/>
            <h2>{props.data[5].studentName}</h2>
            <h3>{props.data[5].phoneNo}</h3>
            <h3>{props.data[5].qualification}</h3>
            <h3>{props.data[5].YOP}</h3>
            <h3>{props.data[5].skills}</h3>
            <h3>{props.data[5].Througout}</h3>
        </div>
    </div>
    </>
  )
}
export default Studentchild;