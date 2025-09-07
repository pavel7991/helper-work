import type { ComponentType } from 'react'
import Home from '../../pages/Home.tsx'
import TextBannerGenerator from '../../pages/TextBannerGenerator.tsx'
import NotFoundPage from '../../pages/NotFoundPage.tsx'
import ContrastGeneratorPage from '../../pages/ContrastGeneratorPage.tsx'
import PromptsPage from '../../pages/PromptsPage.tsx'

interface routesConfigInterface {
	path: string
	label?: string
	Component: ComponentType
	showInMenu: boolean
}

export const routesConfig: routesConfigInterface[] = [
	{ path: '/', label: 'Home', Component: Home, showInMenu: true },

	{
		path: '/prompts',
		label: 'Промты',
		Component: PromptsPage,
		showInMenu: true
	},
	{
		path: '/prompts/:category',
		label: 'Prompts by Category',
		Component: PromptsPage,
		showInMenu: false
	},

	{
		path: '/generate-text-banner',
		label: 'Генератор текстовых баннеров',
		Component: TextBannerGenerator,
		showInMenu: true
	},
	{
		path: '/contrast-checker',
		label: 'Contrast Checker',
		Component: ContrastGeneratorPage,
		showInMenu: true
	},
	{
		path: '*',
		label: '404 - Page Not Found',
		Component: NotFoundPage,
		showInMenu: false
	}
]
