import React from "react"
import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import { ProductType } from "../types/ProductType"


function CategoryNav() {
  const {data}: ProductType | any = useFetch("/categories")
  console.log(data)

  return (
    <aside>
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">Browse Categories</div>
        <div className="flex flex-col gap-y-6 p-6">
          {data?.map((category: any) => (
          <Link to="">Category</Link>
          ))}
        </div>
      </div>  
    </aside>
  )
}

export default CategoryNav