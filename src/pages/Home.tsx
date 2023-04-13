import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
	Text,
	VStack,
} from '@chakra-ui/react'
import { Link as RouteLink } from 'react-router-dom'

import { CommentCard, FeaturesCard, PizzaCard } from '@components/card'
import { Layout } from '@components/layout'
import { usePizzasValue } from '@context/usePizzasContext'

export const Home = () => {
	const { popularPizzas: pizzas } = usePizzasValue()

	return (
		<Layout my={{ base: '3rem', md: 0 }}>
			<Stack
				minH={'90dvh'}
				w={'full'}
				direction={{ base: 'column', md: 'row' }}
			>
				<Flex flex={1} align={'center'} justify={'center'}>
					<Stack spacing={6} w={'full'} pr={{ base: 0, md: 12 }}>
						<Heading
							fontSize={{ base: '3xl', sm: '3xl', md: '5xl', lg: '6xl' }}
						>
							The Fastest Delivery in
							<Text color={'orange.400'} ml={2} as={'span'}>
								Uzbekistan
							</Text>
						</Heading>
						<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
							We are dedicated to providing you with the freshest and most
							delicious pizzas. Our menu features a variety of mouth-watering
							toppings.
						</Text>
						<Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
							<Button
								as={RouteLink}
								to={'/products'}
								bg={'orange.400'}
								color={'white'}
								_hover={{
									bg: 'orange.500',
								}}
							>
								Order Now
							</Button>
							<Button>How It Works</Button>
						</Stack>
					</Stack>
				</Flex>
				<Flex flex={1}>
					<Image alt={'Login Image'} objectFit={'contain'} src={'/hero2.svg'} />
				</Flex>
			</Stack>
			<Box my={{ base: 12, md: 24 }}>
				<Stack spacing={4} as={Container} textAlign={'center'}>
					<Text
						color={'orange.400'}
						fontWeight={'extrabold'}
						textTransform={'uppercase'}
					>
						What we serve
					</Text>
					<Heading
						fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
						fontWeight={'bold'}
					>
						Your Favourite Food Delivery Partner
					</Heading>
				</Stack>
				<Flex
					mt={12}
					flexWrap="wrap"
					gap={{ base: '2rem', md: '5rem', lg: '8rem' }}
					justify="center"
				>
					<FeaturesCard src="/1.png" text="Easy To Order" />
					<FeaturesCard src="/2.png" text="Faster Delivery" />
					<FeaturesCard src="/3.png" text="Best Quality" />
				</Flex>
			</Box>
			<Box my={24}>
				<Box maxW={'45ch'}>
					<Text
						color={'orange.400'}
						fontWeight={'extrabold'}
						textTransform={'uppercase'}
					>
						Our Menu
					</Text>
					<Heading
						fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						fontWeight={'bold'}
						textTransform={'capitalize'}
					>
						Menu that always make you full in love
					</Heading>
				</Box>

				<Flex
					mt={12}
					flexWrap="wrap"
					gap={{ base: '1rem', md: '3rem' }}
					justify="center"
				>
					{pizzas?.map(pizza => (
						<PizzaCard {...pizza} key={pizza.id} />
					))}
				</Flex>
			</Box>
			<Flex
				my={24}
				direction={{ base: 'column', md: 'row' }}
				alignItems={'center'}
				gap={8}
			>
				<Box maxW={'45ch'}>
					<Text
						color={'orange.400'}
						fontWeight={'extrabold'}
						textTransform={'uppercase'}
					>
						What thay say
					</Text>
					<Heading
						fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
						fontWeight={'bold'}
						textTransform={'capitalize'}
					>
						What our customers say about us
					</Heading>
					<Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} mt={8}>
						We are dedicated to providing you with the freshest and most
						delicious pizzas. Our menu features a variety of mouth-watering
						toppings.
					</Text>
				</Box>
				<VStack gap={4}>
					<CommentCard
						avatarSrc={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
						fullname={'Achim Rolle'}
						comment={
							'Skeptical at first, but exceeded my expectations. Easy ordering, hot and fresh pizza, and delicious toppings.'
						}
						rating={4.7}
					/>
					<CommentCard
						avatarSrc={
							'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						}
						fullname={'Joe Pole'}
						comment={
							'Consistently delicious pizza with variety in sizes and styles. Easy online ordering and friendly delivery drivers. Highly recommended.'
						}
						rating={4.3}
					/>
				</VStack>
			</Flex>
		</Layout>
	)
}
