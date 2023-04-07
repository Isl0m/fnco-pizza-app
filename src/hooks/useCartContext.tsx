import { useToast } from '@chakra-ui/react'
import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { CartPizza, Pizza } from '@schemas/pizza.schema'

import { useLocalStorage } from './useLocalStorage'

type Pizzas = {
	[index: number]: CartPizza
}
type CartContextValue = {
	value: Pizzas
	update: (value: Pizza) => void
	deleteItem: (id: number) => void
	incItemCount: (id: number) => void
	decItemCount: (id: number) => void
	getTotalPrice: () => void
}

export const CartContext = createContext<CartContextValue>({
	value: [],
	update: () => {},
	deleteItem: () => {},
	incItemCount: () => {},
	decItemCount: () => {},
	getTotalPrice: () => {},
})
export const CartContextProvider = ({ children }: PropsWithChildren) => {
	const { getItem, setItem } = useLocalStorage<Pizzas>('cartItems')
	const [cart, setCart] = useState<Pizzas>(getItem())
	const toast = useToast({ duration: 500 })

	const updateCartItem = (value: Pizza) => {
		try {
			setCart(prev => {
				const valId = value.id
				console.log(prev)
				if (prev[valId] == undefined) {
					const res = { ...prev, [valId]: { ...value, count: 1 } }
					setItem(res)
					return res
				} else {
					const count = prev[valId].count + 1
					const res = { ...prev, [valId]: { ...prev[valId], count } }
					setItem(res)
					return res
				}
			})
			toast({
				status: 'success',
				colorScheme: 'orange',
				description: `${value.name} pizza added!`,
			})
		} catch {
			toast({
				status: 'error',
				description: 'Something went wrong!',
			})
		}
	}
	const deleteCartItem = (id: number) => {
		try {
			setCart(prev => {
				const { [id]: removed, ...rest } = prev
				setItem(rest)
				return rest
			})
			toast({
				status: 'success',
				colorScheme: 'orange',
				description: `Pizza removed!`,
			})
		} catch {
			toast({
				status: 'error',
				description: 'Something went wrong!',
			})
		}
	}
	const incItemCount = (id: number) => {
		setCart(prev => {
			const count = prev[id].count + 1
			const res = { ...prev, [id]: { ...prev[id], count } }
			setItem(res)
			return res
		})
	}
	const decItemCount = (id: number) => {
		setCart(prev => {
			const count = prev[id].count - 1
			if (count > 0) {
				const res = { ...prev, [id]: { ...prev[id], count } }
				setItem(res)
				return res
			} else {
				const { [id]: deleted, ...rest } = prev
				setItem(rest)
				return rest
			}
		})
	}
	const getTotalPrice = () => {
		return Object.values(cart)
			.map(i => i.price * i.count)
			.reduce((prev, curr) => prev + curr)
			.toFixed(2)
	}
	return (
		<CartContext.Provider
			value={{
				value: cart,
				update: updateCartItem,
				deleteItem: deleteCartItem,
				incItemCount,
				decItemCount,
				getTotalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export const useCartValue = () => {
	return useContext(CartContext)
}
