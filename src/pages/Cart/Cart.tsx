import { Heading, useDisclosure } from '@chakra-ui/react'

import { Layout } from '@components/layout'
import { useCartValue } from 'context/useCartContext'

import { CartEmpty } from './CartEmpty'
import { CartFooter } from './CartFooter'
import { CartItems } from './CartItems'
import { OrderModal } from './modal'

export const Cart = () => {
	const { value: pizzas } = useCartValue()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const isCartEmpty = Object.entries(pizzas).length === 0

	if (isCartEmpty) return <CartEmpty />
	return (
		<Layout>
			<Heading
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
				fontWeight={'bold'}
				textTransform={'capitalize'}
			>
				Cart
			</Heading>
			<CartItems />
			<CartFooter handleClick={onOpen} />
			<OrderModal isOpen={isOpen} onClose={onClose} />
		</Layout>
	)
}
