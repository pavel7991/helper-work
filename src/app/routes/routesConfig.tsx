import type { ComponentType } from 'react'
import TextBannerGenerator from '../../pages/TextBannerGenerator.tsx'
import NotFoundPage from '../../pages/NotFoundPage.tsx'
import PromptsPage from '../../pages/PromptsPage.tsx'

interface routesConfigInterface {
	path: string
	label?: string
	Component: ComponentType
	showInMenu: boolean
}

export const routesConfig: routesConfigInterface[] = [
	{
		path: '/',
		label: 'Текстовые баннеры',
		Component: TextBannerGenerator,
		showInMenu: true
	},
	{
		path: '/prompts',
		label: 'Промты картинок',
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
		path: '*',
		label: '404 - Page Not Found',
		Component: NotFoundPage,
		showInMenu: false
	}
]
