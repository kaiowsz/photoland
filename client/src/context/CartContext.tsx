import React, { useState, createContext, useEffect } from "react"
import { CartContextType } from "../@types/CartContextType"

export const CartContext = createContext<CartContextType | null>(null)

function CartProvider({children}: any) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cart, setCart] = useState<any[]>([])
  const [itemsAmount, setItemsAmount] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)

  useEffect(() => {
    const amount = cart.reduce((a, c) => {
      return a + c.amount;
    }, 0)

    setItemsAmount(amount)
  }, [cart])

  useEffect(() => {
    const total = cart.reduce((a, c) => {
      return a + c.attributes.price * c.amount
    }, 0)

    setTotal(total)
  }, [cart])
  

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

  function removeFromCart(id: string | number | undefined) {
    const newCart = cart.filter((item: any) => {
      return item.id !== id
    })
    setCart(newCart)
  }

  function handleInput(event: any, id: string | number | undefined) {
    const value = parseInt(event.target.value)
    const cartItem = cart.find((item) => {
      return item.id === id
    })

    if(cartItem) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          if(isNaN(value)) {
            setAmount(1)
            return {...item, amount: 1}
          } else {
            setAmount(value)
            return {...item, amount: value}
          }
        } else {
          return item
        }
      })

      setCart(newCart)
    }
    setIsOpen(true)
  }

  function handleSelect(event: any, id: string | number | undefined) {
    const value = parseInt(event.target.value)
    const cartItem = cart.find(item => {
      return item.id === id
    })

    if(cartItem) {
      const newCart = [...cart].map(item => {
        if(item.id === id) {
          setAmount(value)
          return { ...item, amount: value }
        } else {
          return item
        }
      })

      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart, removeFromCart, itemsAmount, handleInput, handleSelect, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider