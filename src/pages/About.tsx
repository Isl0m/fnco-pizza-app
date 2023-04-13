import { Box, Heading, Text } from '@chakra-ui/react'

import { Layout } from '@components/layout'

export const About = () => {
	return (
		<Layout>
			<Box>
				<Heading>Our mission</Heading>
				<Text>
					Our mission at Pizza Delivery Company is to provide our customers with
					the most delicious, high-quality pizzas, delivered quickly and with a
					smile. We strive to exceed our customers' expectations every time they
					order from us, by offering a wide variety of toppings and crust
					options, as well as excellent customer service. We are committed to
					using only the freshest, highest-quality ingredients in our pizzas,
					and we believe that great pizza should be affordable and accessible to
					everyone. At Pizza Delivery Company, we are passionate about making
					our customers happy, one slice at a time.
				</Text>
			</Box>
		</Layout>
	)
}
