import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ErrorBoundaryLayout } from '@components/error-boundary'
import { CartContextProvider } from '@hooks/useCartContext'
import { App } from '@pages/App'
import { Cart } from '@pages/Cart'
import { Products } from '@pages/Products'

import './index.css'

const router = createBrowserRouter([
	{
		element: <ErrorBoundaryLayout />,

		children: [
			{
				path: '/',
				element: <App />,
			},
			{
				path: '/products',
				element: <Products />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider>
			<CartContextProvider>
				<RouterProvider router={router} />
			</CartContextProvider>
		</ChakraProvider>
	</React.StrictMode>
)
