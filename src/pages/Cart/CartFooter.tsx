import { Button, HStack, Text, useColorModeValue } from '@chakra-ui/react'

import { useCartValue } from '@context/useCartContext'

type Props = {
	handleClick: () => void
}

export const CartFooter = ({ handleClick }: Props) => {
	const { getTotalPrice } = useCartValue()

	return (
		<HStack
			pos={'fixed'}
			bottom={0}
			left={0}
			py={2}
			bgColor={useColorModeValue('#CBD5E0dd', '#2D3748cc')}
			backdropFilter={'auto'}
			backdropBlur={'15px'}
			w={'full'}
			justifyContent={'center'}
			gap={{ base: '5rem', md: '7rem', lg: '10rem' }}
		>
			<Text fontWeight={'bold'}>{`Total: $${getTotalPrice()}`}</Text>
			<Button colorScheme={'orange'} onClick={handleClick}>
				Order
			</Button>
		</HStack>
	)
}
