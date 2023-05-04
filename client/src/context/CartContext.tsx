import React, { useState, createContext } from "react"
import { CartContextType } from "../@types/CartContextType"

export const CartContext = createContext<CartContextType | null>(null)

function CartProvider({children}: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<[]>([])
  const [itemsAmount, setItemsAmount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  function addToCart(item: any, id: string | number | undefined) {
    console.log(`${id}`)
  }

  return (
    <CartContext.Provider value={{isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider