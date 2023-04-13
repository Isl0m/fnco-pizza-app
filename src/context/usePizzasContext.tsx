import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'

import { Pizza } from '@schemas/pizza.schema'
import { SupabaseServices } from '@supabase/supabase.service'

type PizzasContextValues = {
	popularPizzas: Pizza[] | []
	pizzas: Pizza[] | []
}

export const PizzasContext = createContext<PizzasContextValues>({
	pizzas: [],
	popularPizzas: [],
})

export const PizzasContextProvider = ({ children }: PropsWithChildren) => {
	const [pizzas, setPizzas] = useState<Pizza[] | []>([])
	const [popularPizzas, setPopularPizzas] = useState<Pizza[] | []>([])
	useEffect(() => {
		const getPizzas = async () => {
			const { data: pizzas } = await SupabaseServices.getAll()
			const { data: popularPizzas } = await SupabaseServices.getMostPopular()

			// @ts-ignore
			setPizzas(pizzas)

			// @ts-ignore
			setPopularPizzas(popularPizzas)
		}

		getPizzas()
	}, [])
	return (
		<PizzasContext.Provider value={{ pizzas, popularPizzas }}>
			{children}
		</PizzasContext.Provider>
	)
}

export const usePizzasValue = () => {
	return useContext(PizzasContext)
}
