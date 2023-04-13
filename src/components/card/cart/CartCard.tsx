import {
	HStack,
	Image,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'

import { CartPizza } from '@schemas/pizza.schema'

import { Controls } from './Controls'

export const CartCart: FC<CartPizza> = props => {
	const { id, name, imageUrl: src, price, count } = props

	return (
		<HStack
			bgColor={useColorModeValue('gray.200', 'gray.700')}
			borderRadius={'lg'}
			py={2}
			px={4}
			justifyContent={'space-between'}
		>
			<Image boxSize={120} src={src} alt={name} />
			<VStack alignItems={'left'}>
				<Text
					fontSize={{ base: 'sm', md: 'md' }}
					fontWeight={'bold'}
					noOfLines={1}
				>
					{name}
				</Text>
				<HStack>
					<Text color={'orange.400'}>
						{count} x ${price.toFixed(2)}
					</Text>
				</HStack>
			</VStack>
			<Controls id={id} />
		</HStack>
	)
}
