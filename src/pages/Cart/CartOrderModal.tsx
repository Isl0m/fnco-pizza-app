import {
	Button,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const CartOrderModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Order Pizzas</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Heading>Hi</Heading>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button>Order</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
