import {
	Box,
	Button,
	HStack,
	Heading,
	SimpleGrid,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

import { CartCart } from '@components/card'
import { Layout } from '@components/layout'
import { useCartValue } from '@hooks/useCartContext'

export const Cart = () => {
	const { value: pizzas, getTotalPrice } = useCartValue()
	return (
		<Layout>
			{Object.values(pizzas).length ? (
				<>
					<Heading
						fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						fontWeight={'bold'}
						textTransform={'capitalize'}
					>
						Cart
					</Heading>
					<SimpleGrid
						columns={{ base: 1, md: 2, lg: 3 }}
						mt={8}
						mb={24}
						gap={{ base: '1rem', md: '3rem' }}
					>
						{Object.values(pizzas).map(pizza => (
							<CartCart {...pizza} key={pizza.id} />
						))}
					</SimpleGrid>
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
						<Button colorScheme={'orange'}>Order</Button>
					</HStack>
				</>
			) : (
				<Box mt={4}>
					<Heading
						fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						fontWeight={'bold'}
						textTransform={'capitalize'}
					>
						Cart is Empty 😕
					</Heading>
					<Text my={4}>
						Probably you don't added pizza to cart.
						<br />
						To add pizza to cart go to products page.
					</Text>
					<Button as={RouteLink} to={'/products'}>
						Products
					</Button>
				</Box>
			)}
		</Layout>
	)
}
