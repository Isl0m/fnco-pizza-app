import { HStack, Text } from '@chakra-ui/react'

import { RatingStars } from './RatingStars'

export const Rating = ({ rating }: { rating: number }) => {
	const stars = RatingStars(rating)
	return (
		<HStack>
			<HStack color={'yellow.300'}>{stars?.map(star => star)}</HStack>
			<Text>{rating}</Text>
		</HStack>
	)
}
