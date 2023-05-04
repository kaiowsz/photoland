import React from "react"

import { useFetch } from "../hooks/useFetch"
import { ProductSlider } from "./"
import { ProductType } from "../@types/ProductType"

function RelatedProducts({categoryTitle}: {categoryTitle: string}) {

  const {data}: { data: ProductType[] } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`)

  console.log(data)

  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
      
    </div>
  )
}

export default RelatedProducts