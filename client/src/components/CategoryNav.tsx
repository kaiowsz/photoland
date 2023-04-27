import React from "react"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { ProductType } from "../@types/ProductType"


function CategoryNav() {
  const {data}: ProductType | any = useFetch("/categories")
  console.log(data)

  return (
    <aside>
      <div className="bg-primary hidden xl:flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">Browse Categories</div>
        <div className="flex flex-col gap-y-6 p-4 pt-6">
          {data?.map((category: any) => (
          <Link 
            className="cursor-pointer uppercase hover:text-slate-400 w-fit px-2 pr-4 duration-200"
            to={`/products/${category.id}`} 
            key={category.id}
            >
            {category.attributes.title}
          </Link>
          ))}
        </div>
      </div>  
    </aside>
  )
}

export default CategoryNav