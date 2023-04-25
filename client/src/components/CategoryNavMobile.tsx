import React from "react"
import { FiX } from "react-icons/fi"

interface NavMobileProps {
  setNavMobile: React.Dispatch<React.SetStateAction<boolean>>
}

function CategoryNavMobile({setNavMobile}: NavMobileProps) {
  return (
    <div className="w-full h-full bg-primary p-8">
      <div className="flex justify-end mb-8 ml-8 cursor-pointer" onClick={() => setNavMobile(false)}>
        <FiX className="text-3xl cursor-pointer" />
      </div>
      CategoryNavMobile
    </div>
  )
}

export default CategoryNavMobile