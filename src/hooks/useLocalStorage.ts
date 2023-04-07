export const useLocalStorage = <T,>(key: string) => {
	const setItem = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value))
	}
	const getItem = (): T | {} => {
		const value = localStorage.getItem(key)
		if (value) {
			return JSON.parse(value)
		}
		return {}
	}
	return { setItem, getItem }
}
