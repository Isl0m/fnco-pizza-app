import {
	Button,
	HStack,
	IconButton,
	Image,
	Text,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'
import { GrAdd, GrSubtract } from 'react-icons/gr'

import { DeleteIcon } from '@chakra-ui/icons'
import { useCartValue } from '@hooks/useCartContext'
import { CartPizza } from '@schemas/pizza.schema'

export const CartCart: FC<CartPizza> = props => {
	const { id, name, imageUrl: src, price, count } = props
	const { deleteItem, incItemCount, decItemCount } = useCartValue()
	const handleDelete = () => {
		deleteItem(id)
	}
	const handleIncCount = () => {
		incItemCount(id)
	}
	const handleDecCount = () => {
		decItemCount(id)
	}
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
			<VStack>
				<IconButton
					aria-label="delete-pizza-button"
					colorScheme={'red'}
					size={'sm'}
					icon={<DeleteIcon />}
					onClick={handleDelete}
				/>
				<IconButton
					aria-label="inc-pizza-count-button"
					icon={<GrAdd />}
					colorScheme={'gray'}
					size={'sm'}
					stroke={'white'}
					sx={{
						'& > svg > path': {
							stroke: useColorModeValue('gray.900', 'gray.100'),
						},
					}}
					onClick={handleIncCount}
				/>
				<IconButton
					aria-label="dec-pizza-count-button"
					icon={<GrSubtract />}
					colorScheme={'gray'}
					size={'sm'}
					stroke={'white'}
					sx={{
						'& > svg > path': {
							stroke: useColorModeValue('gray.900', 'gray.100'),
						},
					}}
					onClick={handleDecCount}
				/>
			</VStack>
		</HStack>
	)
}
