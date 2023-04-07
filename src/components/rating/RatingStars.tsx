import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

export const RatingStars = (rating: number) => {
	const stars = []
	for (let i = 0; i < 5; i++) {
		const diff = rating - i

		if (diff >= 1) stars.push(<BsStarFill key={diff} />)
		else if (diff >= 0.5) stars.push(<BsStarHalf key={diff} />)
		else stars.push(<BsStar key={diff} />)
	}
	return stars
}
