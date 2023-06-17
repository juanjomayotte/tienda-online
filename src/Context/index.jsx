import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children})=> {
    //contador de carrito
    const [count, setCount] = useState(0)
    
    //ventanta de product detail
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    //contenido de product detail
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count, setCount, openProductDetail, closeProductDetail, isProductDetailOpen, productToShow, setProductToShow
        }}>
        {children}
        </ShoppingCartContext.Provider>
    )
}