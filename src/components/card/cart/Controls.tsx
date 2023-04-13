import { IconButton, VStack, useColorModeValue } from '@chakra-ui/react'
import { GrAdd, GrSubtract } from 'react-icons/gr'

import { DeleteIcon } from '@chakra-ui/icons'
import { useCartValue } from '@context/useCartContext'

export const Controls = ({ id }: { id: number }) => {
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
	)
}
