import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ErrorBoundaryLayout } from '@components/error-boundary'
import { CartContextProvider } from '@context/useCartContext'
import { PizzasContextProvider } from '@context/usePizzasContext'
import { About } from '@pages/About'
import { Cart } from '@pages/Cart'
import { Contacts } from '@pages/Contacts'
import { Home } from '@pages/Home'
import { Products } from '@pages/Products'

import './index.css'

const router = createBrowserRouter([
	{
		element: <ErrorBoundaryLayout />,

		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			// {
			// 	path: '/about',
			// 	element: <About />,
			// },
			// {
			// 	path: '/contacts',
			// 	element: <Contacts />,
			// },
			{
				path: '*',
				element: <Navigate to={'/'} />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<PizzasContextProvider>
				<CartContextProvider>
					<RouterProvider router={router} />
				</CartContextProvider>
			</PizzasContextProvider>
		</ChakraProvider>
	</React.StrictMode>
)
