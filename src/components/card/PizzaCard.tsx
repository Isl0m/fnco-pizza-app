import {
	Button,
	HStack,
	Image,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'

import { useCartValue } from '@hooks/useCartContext'
import { Pizza } from '@schemas/pizza.schema'

export const PizzaCard: FC<Pizza> = props => {
	const { update } = useCartValue()
	const handleClick = () => {
		update(props)
	}
	const { name, imageUrl: src, price } = props
	return (
		<VStack
			bgColor={useColorModeValue('gray.200', 'gray.700')}
			borderRadius={'lg'}
			p={4}
			pl={6}
			w={'25ch'}
		>
			<Image boxSize={200} src={src} alt={name} />
			<Text
				fontSize={{ base: 'md', md: 'lg' }}
				fontWeight={'bold'}
				noOfLines={1}
			>
				{name}
			</Text>
			<HStack w={'full'} justifyContent={'space-between'}>
				<Text>${price.toFixed(2)}</Text>
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
			</HStack>
		</VStack>
	)
}
