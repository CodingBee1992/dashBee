import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/App.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login.tsx'
import Home from './pages/Home.tsx'
import Users from './pages/Users.tsx'
import Products from './pages/Products.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path="/dashBee/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="users" element={<Users />} />
						<Route path="products" element={<Products />} />
					</Route>
				</Route>
				<Route path="/dashBee/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
