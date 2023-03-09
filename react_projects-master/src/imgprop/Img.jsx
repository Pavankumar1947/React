import React from 'react';
import Img1 from './img1';
import Pushpa from "./pspk.jpg"

const Img = () => {
    return (
        <>
        <h1>pushpa</h1>
        <img src="https://imgnew.outlookindia.com/public/uploads/articles/2019/8/30/DHONI.jpg" />
        <img src={Pushpa} alt="img2"></img>
        

        <Img1 data={Pushpa}/>
        </>
    );
}

export default Img;
