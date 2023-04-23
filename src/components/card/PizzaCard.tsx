import {
	HStack,
	Image,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'

import { AddToCart } from '@components/AddToCart'
import { Pizza } from '@schemas/pizza.schema'

export const PizzaCard: FC<Pizza> = props => {
	const { name, imageUrl: src, price } = props
	return (
		<VStack
			bgColor={useColorModeValue('gray.200', 'gray.700')}
			borderRadius={'lg'}
			p={4}
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
				<AddToCart {...props} />
			</HStack>
		</VStack>
	)
}
