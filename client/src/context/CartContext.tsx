import React, { useState, createContext } from "react"
import { CartContextType } from "../@types/CartContextType"

export const CartContext = createContext<CartContextType | null>(null)

function CartProvider({children}: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<any[]>([])
  const [itemsAmount, setItemsAmount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  function addToCart(item: any, id: string | number | undefined) {
    const itemID = Number(id)
    const newItem = { ...item[0], amount: 1 }
    setCart([...cart, newItem])

    const cartItem = cart.find((item: any) => {
      return item.id === itemID
    })

    if(cartItem) {
      
      const newCart = cart.map((item: any) => {
        if(item.id === itemID) {
          setAmount(cartItem.amount + 1)
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item
        }
      })
      setCart(newCart)

    } else {
      setCart([...cart, newItem])
    }

    setIsOpen(true)
  }


  return (
    <CartContext.Provider value={{isOpen, setIsOpen, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider