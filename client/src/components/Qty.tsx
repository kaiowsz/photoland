import React, { useContext } from "react"

import { CartContext } from "../context/CartContext"
import { CartContextType } from "../@types/CartContextType"

function Qty({item} : {item: any}) {

  const { handleInput, handleSelect } = useContext(CartContext) as CartContextType

  return (
    <div className="flex gap-x-6 items-center text-primary ">
      <input
      min={1}
      onChange={(event) => handleInput(event, item.id)}
      className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent" 
      type="number"
      value={item.amount} /> 
    </div>
  )
}

export default Qty