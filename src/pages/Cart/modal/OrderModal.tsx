import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'

import { ModalBody } from './ModalBody'

type Props = {
	isOpen: boolean
	onClose: () => void
}

export const OrderModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Order pizzas</ModalHeader>
				<ModalCloseButton />
				<ModalBody />

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
