import { routesConfig } from '../../app/routes/routesConfig.tsx'
import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<header className="bg-neutral-900 py-4 mb-10 shadow-sm">
			<div className="container">
				<ul className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
					{routesConfig
						.filter((route) => route.showInMenu)
						.map(({ path, label }) => (
							<li key={path}>
								<NavLink
									to={path}
									className={({ isActive }) =>
										`inline-flex px-4 py-2 rounded-sm transition-all duration-300 hover:bg-red-800 hover:text-white
                    ${isActive ? 'bg-red-900 text-white' : 'bg-red-200 text-black'}`
									}
								>
									{label}
								</NavLink>
							</li>
						))}
				</ul>
			</div>
		</header>
	)
}
export default Header
