import { Heading, useDisclosure } from '@chakra-ui/react'

import { CartFooter } from './CartFooter'
import { CartItems } from './CartItems'
import { OrderModal } from './modal'

export const CartActive = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
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
		</>
	)
}
