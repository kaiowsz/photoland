import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper"
import Product from "../components/Product"

function ProductSlider({data}: any) {
  console.log(data)

  return (
    <Swiper modules={[Pagination, Navigation]} loop={true} navigation={true} breakpoints={{
      
    }}>
      <>
      {data?.map((product: any) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
      </>
    </Swiper>
  )
}

export default ProductSlider