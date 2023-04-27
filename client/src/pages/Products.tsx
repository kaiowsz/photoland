import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { CategoryNav, Product } from "../components"
import { ProductType } from "../types/ProductType"

function Products() {

  const { id } = useParams()
  const { data }: { data: ProductType[] } = useFetch(`/products?populate=*&filters[categories][id][$eq]=${id}`)
  const [title, setTitle] = useState<string>("")

  console.log(data)

  useEffect(() => {
    if(data.length > 0) {
      setTitle(data[0].attributes.categories.data[0].attributes.title)
    }
  })
  

  return (
    <div className="mb-16 pt-40 p-4 lg:pt-0">
      <div className="contianer mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            <div className="py-3 text-xl uppercase text-center lg:text-left">{title} cameras</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product: ProductType) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Products