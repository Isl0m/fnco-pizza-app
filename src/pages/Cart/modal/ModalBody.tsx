import {
	Button,
	ModalBody as ChakraModalBody,
	FormControl,
	Heading,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
	VStack,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useCartValue } from '@context/useCartContext'

type ModalForm = {
	name: string
	tel: string
}

export const ModalBody = () => {
	const { getTotalPrice, deleteAll } = useCartValue()

	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm<ModalForm>()

	const onSubmit: SubmitHandler<ModalForm> = values => {
		deleteAll()
	}

	return (
		<ChakraModalBody>
			<form onSubmit={handleSubmit(onSubmit)}>
				<VStack gap={4}>
					<Heading>{`Total Price $${getTotalPrice()}`}</Heading>
					<FormControl>
						<Input
							isInvalid={!!errors.name}
							placeholder="Enter your name"
							{...register('name', {
								required: 'This field required',
								minLength: {
									value: 3,
									message: 'Minimum length should be 3',
								},
							})}
						/>
						{errors.name && (
							<Text color={'red.500'}>{errors.name.message}</Text>
						)}
					</FormControl>
					<FormControl>
						<InputGroup>
							<InputLeftAddon children="+998" />
							<Input
								isInvalid={!!errors.tel}
								placeholder="Enter your phone number"
								{...register('tel', {
									required: ' This field required',
									pattern: { value: /\d{9}/, message: 'Enter valid number' },
								})}
							/>
						</InputGroup>
						{errors.tel && <Text color={'red.500'}>{errors.tel.message}</Text>}
					</FormControl>
				</VStack>
				<Button
					mt={4}
					colorScheme="orange"
					isLoading={isSubmitting}
					type="submit"
				>
					Submit
				</Button>
			</form>
		</ChakraModalBody>
	)
}
