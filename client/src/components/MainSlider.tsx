import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../slider.css"
import { Pagination } from "swiper"
import { ProductType } from "../types/ProductType"
import CameraImg from "../img/camera.png"

const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
]



function MainSlider() {
  return (
    <Swiper modules={[Pagination]} loop={false} pagination={{ clickable: true }} className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl">
      <>
      {
        sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div>
              <div>text</div>

              <div className="flex-1">
                <img className="xl:absolute xl:-right-16 xl:-bottom-12" src={slide.img} alt="" />
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