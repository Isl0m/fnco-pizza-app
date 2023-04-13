import { Layout } from '@components/layout'
import { useCartValue } from 'context/useCartContext'

import { CartActive } from './CartActive'
import { CartEmpty } from './CartEmpty'

export const Cart = () => {
	const { value: pizzas } = useCartValue()
	return (
		<Layout>
			{Object.entries(pizzas).length !== 0 ? <CartActive /> : <CartEmpty />}
		</Layout>
	)
}
