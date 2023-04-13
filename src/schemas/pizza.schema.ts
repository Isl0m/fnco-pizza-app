import { z } from 'zod'

export const PizzaSchema = z.object({
	id: z.number(),
	created_at: z.string(),
	name: z.string(),
	price: z.number(),
	imageUrl: z.string(),
	rating: z.number().min(0).max(5),
})

export type Pizza = z.infer<typeof PizzaSchema>
export type CartPizza = Pizza & { count: number }
