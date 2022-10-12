
import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { Image } from 'antd';
//import Image from "next/image"
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";



const fadeImages = [image3];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}



export default function Slider() {

 
  return (
    <>
       <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
        {fadeImages.map((image) => (
          <div key={image.src} className="relative aspect-square">
          <Image
            layout="fill"
            height={500}
            src={image.src}
            alt={image.alt}
          /></div>
        ))}
        {/* <img src={require('../images/image1.jpg')}/> 
        </div>
        <div className="each-fade">
        <img src={require('../images/image2.jpg')}/> 
        </div>
        <div className="each-fade">
        <img src={require('../images/image3.jpg')}/>  */}
        </div>
      </Fade>
    </div>
    </>
  );
};


