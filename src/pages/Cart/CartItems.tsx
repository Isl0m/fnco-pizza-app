import { SimpleGrid } from '@chakra-ui/react'

import { CartCard } from '@components/card'
import { useCartValue } from '@context/useCartContext'

export const CartItems = () => {
	const { value: pizzas } = useCartValue()
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, lg: 3 }}
			mt={8}
			mb={24}
			gap={{ base: '1rem', md: '3rem' }}
		>
			{Object.values(pizzas).map(pizza => (
				<CartCard {...pizza} key={pizza.id} />
			))}
		</SimpleGrid>
	)
}
