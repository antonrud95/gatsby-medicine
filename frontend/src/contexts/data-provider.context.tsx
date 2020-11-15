import React, { useState, createContext } from 'react'

export interface Props {
  removeCart: any
  addCart: any
  cart: any
}

export const PropsDefaultValue: Props = {
  removeCart: () => [],
  addCart: () => [],
  cart: [],
}

export const PageContext = createContext<Props>(PropsDefaultValue)

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const addCart = (sale) => {
    const check = cart.every((item) => {
      return item.id !== sale.id
    })
    if (check) {
      setCart([...cart, sale])
    } else {
      alert('The product has been added to cart')
    }
  }
  const removeCart = (id) => {
    if (
      window.confirm('Вы действительно хотите удалить этот товар из корзины?')
    ) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          cart.splice(index, 1)
        }
      })
      setCart([...cart])
    }
  }
  const value = {
    cart,
    addCart,
    removeCart,
  }
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
