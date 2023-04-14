import { Container, ContainerProps } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

type Props = PropsWithChildren & ContainerProps & { noFooter?: boolean }
export const Layout = ({ children, noFooter = false, ...rest }: Props) => {
	return (
		<>
			<Header />
			<Container
				as={'main'}
				maxW={{ base: '40ch', lg: '120ch', md: '80ch', sm: '60ch' }}
				my={'3rem'}
				{...rest}
			>
				{children}
			</Container>
			{!noFooter && <Footer />}
		</>
	)
}
