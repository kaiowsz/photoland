import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../slider.css"
import { Pagination } from "swiper"
import { ProductType } from "../@types/ProductType"
import CameraImg from "../img/camera.png"

import { Link } from "react-router-dom"

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
    linkTo: "/products/1"
  },
  {
    img: CameraImg,
    pretitle: "Professionals",
    titlePart1: "Check Our",
    titlePart2: "Professional",
    titlePart3: "Cameras",
    btnText: "Shop now",
    linkTo: "/products/5"
  },
  {
    img: CameraImg,
    pretitle: "Film cameras",
    titlePart1: "The best",
    titlePart2: "Film cameras",
    titlePart3: "of the market",
    btnText: "Buy now",
    linkTo: "/products/4"
  },
]



function MainSlider() {
  return (
    <Swiper modules={[Pagination]} loop={false} pagination={{ clickable: true }} className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl">
      <>
      {
        sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
              <div className="w-full lg:flex-1 ">
                <div className="uppercase mb-1 text-center lg:text-left">{slide.pretitle}</div>
                <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </div>
                <Link to={slide.linkTo} className="btn btn-accent mx-auto lg:mx-0 w-fit">{slide.btnText}</Link>
              </div>

              <div className="flex-1">
                <img className="xl:absolute xl:-right-16 xl:-bottom-12" src={slide.img} alt={`camera ${index}`} />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
      </>
    </Swiper>
  )
}

export default MainSlider