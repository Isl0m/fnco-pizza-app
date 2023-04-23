import { Flex, Heading, Skeleton } from '@chakra-ui/react'

import { PizzaCard } from '@components/card'
import { Layout } from '@components/layout'
import { usePizzasValue } from '@context/usePizzasContext'

export const Products = () => {
	const { pizzas } = usePizzasValue()
	const pizzasArray = pizzas

	return (
		<Layout>
			<Heading
				fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
				fontWeight={'bold'}
				textTransform={'capitalize'}
			>
				Choose what you want
			</Heading>
			<Flex
				mt={12}
				flexWrap="wrap"
				gap={{ base: '1rem', md: '3rem' }}
				justify="center"
			>
				{pizzasArray?.length ? (
					pizzasArray.map(
						pizza => pizza && <PizzaCard {...pizza} key={pizza.id} />
					)
				) : (
					<>
						<Skeleton borderRadius={'lg'} w={'25ch'} h={'16rem'} />
						<Skeleton borderRadius={'lg'} w={'25ch'} h={'16rem'} />
						<Skeleton borderRadius={'lg'} w={'25ch'} h={'16rem'} />
						<Skeleton borderRadius={'lg'} w={'25ch'} h={'16rem'} />
					</>
				)}
			</Flex>
		</Layout>
	)
}
