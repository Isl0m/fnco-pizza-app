import { Heading, SimpleGrid, useDisclosure } from '@chakra-ui/react'

import { CartCard } from '@components/card'
import { Layout } from '@components/layout'
import { Pizzas } from '@schemas/pizza.schema'
import { useCartValue } from 'context/useCartContext'

import { CartEmpty } from './CartEmpty'
import { CartFooter } from './CartFooter'
import { OrderModal } from './modal'

export const CartItems = ({ items }: { items: Pizzas }) => {
	return (
		<SimpleGrid
			columns={{ base: 1, md: 2, lg: 3 }}
			mt={8}
			mb={24}
			gap={{ base: '1rem', md: '3rem' }}
		>
			{Object.values(items).map(item => (
				<CartCard {...item} key={item.id} />
			))}
		</SimpleGrid>
	)
}

export const Cart = () => {
	const { value: pizzas } = useCartValue()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const isCartEmpty = Object.entries(pizzas).length === 0

	if (isCartEmpty) return <CartEmpty />
	return (
		<Layout noFooter>
			<Heading
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
				fontWeight={'bold'}
				textTransform={'capitalize'}
			>
				Cart
			</Heading>
			<CartItems items={pizzas}/>
			<CartFooter handleClick={onOpen} />
			<OrderModal isOpen={isOpen} onClose={onClose} />
		</Layout>
	)
}
