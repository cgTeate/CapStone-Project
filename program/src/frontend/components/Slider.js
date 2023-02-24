
import { Image } from 'antd';
import React from "react";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const trendingfadeImages = [
  "https://cdn.discordapp.com/attachments/917547212475621456/1046210226883403796/IMG_6088.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1043248859633168485/IMG_4498.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1043242498060988536/IMG_4873.JPG",
];
const kicksfadeImages = [
  "https://cdn.discordapp.com/attachments/917547212475621456/1043249395170287686/IMG_6198.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1043245304981495869/IMG_5268.JPEG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1046896240924819538/IMG_4914.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1046896648376291348/IMG_4348.JPG",

];
const modelfadeImages = [
  "https://cdn.discordapp.com/attachments/917547212475621456/1046894650767704064/IMG_5925.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1046917907768152194/IMG_6679.jpg",
  "https://cdn.discordapp.com/attachments/917547212475621456/1046609283904720976/IMG_5213.JPG", 
  "https://cdn.discordapp.com/attachments/917547212475621456/1046897247847186574/IMG_4229.JPG",
  
];
const accessoriesfadeImages = [
  "https://cdn.discordapp.com/attachments/917547212475621456/1043248816545091624/IMG_4362.JPG",
  "https://cdn.discordapp.com/attachments/917547212475621456/1043247068187205733/IMG_4982.JPG",
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
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide  className="swiper-slide">
        <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <img src={trendingfadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={trendingfadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={trendingfadeImages[2]} />
        </div>
      </Fade>
    </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <img src={kicksfadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={kicksfadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={kicksfadeImages[2]} />
        </div>
        <div className="each-fade">
          <img src={kicksfadeImages[3]} />
        </div>
      </Fade>
    </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <img src={modelfadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={modelfadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={modelfadeImages[2]} />
        </div>
        <div className="each-fade">
          <img src={modelfadeImages[3]} />
        </div>
      </Fade>
    </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
        <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <img src={accessoriesfadeImages[0]} />
        </div>
        <div className="each-fade">
          <img src={accessoriesfadeImages[1]} />
        </div>
        <div className="each-fade">
          <img src={accessoriesfadeImages[2]} />
        </div>
      </Fade>
    </div>
        </SwiperSlide>
      </Swiper>
      
    </>
  );
};


