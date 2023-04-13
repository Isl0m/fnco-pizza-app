import { Button } from '@chakra-ui/react'

import { useCartValue } from '@context/useCartContext'
import { Pizza } from '@schemas/pizza.schema'

export const AddToCart = (props: Pizza) => {
	const { update } = useCartValue()
	const handleClick = () => {
		update(props)
	}
	return (
		<Button
			bg={'orange.400'}
			color={'white'}
			_hover={{
				bg: 'orange.500',
			}}
			size={'xs'}
			onClick={handleClick}
		>
			Add to cart
		</Button>
	)
}
