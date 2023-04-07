import { z } from 'zod'

export const PizzaSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	name: z.string(),
	price: z.number(),
	imageUrl: z.string(),
	sizes: z.array(z.number()),
	types: z.array(z.number()),
	category: z.number(),
	rating: z.number(),
})

export type Pizza = z.infer<typeof PizzaSchema>
export type CartPizza = Pizza & { count: number }
