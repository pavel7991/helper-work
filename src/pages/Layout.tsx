import Header from '../widgets/header/Header.tsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className="bg-neutral-800 text-white min-h-screen">
			<Header />
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}
export default Layout
