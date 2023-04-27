import React from "react"
import { FiX } from "react-icons/fi"
import { useFetch } from "../hooks/useFetch"
import { ProductType } from "../@types/ProductType"
import { Link } from "react-router-dom"

interface NavMobileProps {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>
}

function CategoryNavMobile({setNavMobile}: NavMobileProps) {

  const {data}: {data: any} = useFetch("/categories")

  return (
    <div className="w-full h-full bg-primary p-8">
      <div className="flex justify-end mb-8 ml-8 cursor-pointer" onClick={() => setNavMobile(false)}>
        <FiX className="text-3xl cursor-pointer" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category: ProductType) => (
          <Link onClick={() => setNavMobile(false)} to={`products/${category.id}`} className="uppercase font-medium hover:text-stone-400 duration-300 w-fit px-4" key={category.id}>
            {category.attributes.title} Cameras
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryNavMobile