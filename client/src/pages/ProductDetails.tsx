import React from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { RelatedProducts } from "../components"
import { CartContext } from "../context/CartContext"
import { ProductType } from "../@types/ProductType"

function ProductDetails() {

  const { id } = useParams()
  const { data }: { data: ProductType[] } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)

  console.log(data)

  if(!data || data.length === 0) {
    return <div className="container mx-auto">Loading...</div>
  }

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} alt="" className="w-full max-w-[65%]" />
          </div>
          <div className="flex-1">

            <div>{data[0].attributes.categories.data[0].attributes.title} cameras</div>
            <h2>{data[0].attributes.title}</h2>
            <p>{data[0].attributes.description}</p>
            <div>
              <div>${data[0].attributes.price}</div>
            </div>
            <button className="btn btn-accent">Add to cart</button>

          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  )
}

export default ProductDetails