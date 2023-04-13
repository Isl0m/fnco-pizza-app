import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

import { Layout } from '@components/layout'

export const CartEmpty = () => {
	return (
		<Layout>
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
		</Layout>
	)
}
