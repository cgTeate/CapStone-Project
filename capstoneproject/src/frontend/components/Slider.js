
import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { Image } from 'antd';
//import Image from "next/image"
import image3 from "../images/image3.jpg";



const fadeImages = [
  "https://cdn.discordapp.com/attachments/917547212475621456/1046210226883403796/IMG_6088.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1046609283904720976/IMG_5213.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1043242498060988536/IMG_4873.JPG",
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true
}



export default function Slider() {

 
  return (
    <>
       <div className="slide-container">
      <Fade {...fadeProperties}>
        {/* <div className="each-fade">
        {fadeImages.map((image) => (
          <div key={image.src} className="relative aspect-square">
          <Image
            layout="fill"
            height={500}
            src={image.src}
            alt={image.alt}
          /></div>
        ))}
        </div> */}
        <div className="each-fade">
          <img src={fadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
        </div>
      </Fade>
    </div>
    </>
  );
};


