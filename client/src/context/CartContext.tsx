import React, { useState, createContext } from "react"
import { CartContextType } from "../@types/CartContextType"

export const CartContext = createContext<CartContextType | null>(null)

function CartProvider({children}: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <CartContext.Provider value={{isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider