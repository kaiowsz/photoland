import React from "react"
import { CategoryNav, MainSlider } from "./"

import PromoImg1 from "../img/promo_img1.png"
import PromoImg2 from "../img/promo_img2.png"

function Hero() {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0 bg-pink-50/10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">

          <div>
            <CategoryNav />
          </div>

          <div className="w-full max-w-lg bg-pink-200 lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>

          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px] bg-pink-50/10">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">text</div>
              <img className="absolute z-20 -top-2 -right-4" src={PromoImg1} alt="" />
            </div>

            <div>
              promo2
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero