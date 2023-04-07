import { Container, Flex, Heading, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { PizzaCard } from '@components/card'
import { Layout } from '@components/layout'
import { Pizza } from '@schemas/pizza.schema'

import { supabase } from '../supabaseClient'

export const Products = () => {
	const [pizzas, setPizzas] = useState<Pizza[] | []>([])
	useEffect(() => {
		const getPizzas = async () => {
			const { data } = await supabase.from('pizzas').select('*')
			// @ts-ignore
			setPizzas(data)
		}

		getPizzas()
	}, [])

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
				{Object.values(pizzas).length ? (
					Object.values(pizzas).map(pizza => (
						<PizzaCard {...pizza} key={pizza.id} />
					))
				) : (
					<>
						<Skeleton borderRadius={'lg'} w={'13.5rem'} h={'17rem'} />
						<Skeleton borderRadius={'lg'} w={'13.5rem'} h={'17rem'} />
						<Skeleton borderRadius={'lg'} w={'13.5rem'} h={'17rem'} />
						<Skeleton borderRadius={'lg'} w={'13.5rem'} h={'17rem'} />
					</>
				)}
			</Flex>
		</Layout>
	)
}
