import { AspectRatio, Box, Heading, Text, VStack } from '@chakra-ui/react'

import { Layout } from '@components/layout'

export const About = () => {
	return (
		<Layout>
			<VStack gap={4}>
				<Heading>Our mission</Heading>
				<Text >
					Our mission at Pizza Delivery Company is to provide our customers with
					the most delicious, high-quality pizzas, delivered quickly and with a
					smile. We strive to exceed our customers' expectations every time they
					order from us, by offering a wide variety of toppings and crust
					options, as well as excellent customer service. We are committed to
					using only the freshest, highest-quality ingredients in our pizzas,
					and we believe that great pizza should be affordable and accessible to
					everyone. At Pizza Delivery Company, we are passionate about making
					our cucstomers happy, one slice at a time.
				</Text>
				<Heading>Backstage</Heading>
				<AspectRatio w={{base:'90vw', md:'2xl', lg: '4xl'}}  ratio={16/9}>
					<iframe
    				title='naruto'
    				src='/backstage.mp4'
						
  				/>
				</AspectRatio>
			</VStack>
		</Layout>
	)
}
