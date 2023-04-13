import { supabase } from './supabase.client'

export const SupabaseServices = {
	async getAll() {
		return await supabase.from('pizzas').select('*')
	},
	async getMostPopular() {
		return await supabase.from('pizzas').select('*').order('rating').range(0, 3)
	},
}
