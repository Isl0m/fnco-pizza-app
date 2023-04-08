import {
	Box,
	Button,
	Flex,
	HStack,
	IconButton,
	Image,
	Link,
	Stack,
	useColorMode,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { FaPizzaSlice } from 'react-icons/fa'
import { NavLink as RouteLink } from 'react-router-dom'

import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Links = [
	{ title: 'Home', path: '/', icon: <AiFillHome /> },
	{ title: 'Products', path: '/products', icon: <FaPizzaSlice /> },
	{ title: 'Cart', path: '/cart', icon: <BsFillCartFill /> },
]

type NavLinkProps = PropsWithChildren & {
	path: string
}
const NavLink = ({ children, path }: NavLinkProps) => (
	<Link
		px={2}
		py={1}
		color="gray.500"
		rounded="md"
		display={'inline-flex'}
		alignItems={'center'}
		gap={2}
		_hover={{
			textDecoration: 'none',
			color: useColorModeValue('gray.900', 'gray.300'),
		}}
		sx={{
			'&.active': {
				color: 'orange.400',
			},
		}}
		as={RouteLink}
		to={path}
	>
		{children}
	</Link>
)

export const Header = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box as="header" bg="transparent" px={8} w="100%">
			<Flex h={16} alignItems="center" justifyContent="space-between">
				<HStack
					w="full"
					spacing={8}
					alignItems="center"
					justifyContent="space-between"
				>
					<Box>
						<Image src="/logo.svg" h={8} alt="logo" />
					</Box>
					<HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
						{Links.map(({ title, path, icon }) => (
							<NavLink key={title} path={path}>
								{icon}
								{title}
							</NavLink>
						))}
					</HStack>
					<HStack>
						<IconButton
							size="md"
							icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
							aria-label="Open Menu"
							display={{ md: 'none' }}
							onClick={isOpen ? onClose : onOpen}
							mr={2}
						/>
						<IconButton
							aria-label="Change color mode"
							icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							onClick={toggleColorMode}
						/>
					</HStack>
				</HStack>
			</Flex>

			{isOpen ? (
				<Box pb={4} display={{ md: 'none' }}>
					<Stack as={'nav'} spacing={4}>
						{Links.map(({ title, path, icon }) => (
							<NavLink key={title} path={path}>
								{icon}
								{title}
							</NavLink>
						))}
					</Stack>
				</Box>
			) : null}
		</Box>
	)
}
