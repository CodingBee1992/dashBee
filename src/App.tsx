import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'

const App = () => {
	return (
		<div className="text-[var(--main-color)] bg-[var(--main-bg)]">
			<Navbar />

			<div className='flex'>
				<div>
					<Sidebar />
				</div>
				<div className='w-full p-4'>
					<Outlet />
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default App
