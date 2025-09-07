import { Link, useParams } from 'react-router-dom'
import promptsData from '../data/promtsData.ts'

const PromptsPage = () => {
	const { category } = useParams()

	const activeCategory = promptsData.find((cat) => cat.key === category) || promptsData[0]

	return (
		<div>
			<nav className="flex gap-x-3 mb-6">
				{promptsData.map((cat) => (
					<Link
						key={cat.key}
						to={`/prompts/${cat.key}`}
						className={`px-3 py-1 rounded-sm border ${
							cat.key === activeCategory?.key
								? 'bg-blue-500 text-white border-blue-500'
								: 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
						}`}
					>
						{cat.label}
					</Link>
				))}
			</nav>

			<div>
				{activeCategory.prompts.map((prompt, index) => (
					<div
						key={index}
						className="border p-4 rounded-lg mb-4"
						style={{
							backgroundImage: prompt.img ? `url("${prompt.img}")` : 'none',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundColor: prompt.img ? undefined : 'rgba(0, 0, 0, 0.5)'
						}}
					>
						<p>{prompt.name}</p>
						<p>{prompt.promptText}</p>
					</div>
				))}
			</div>
		</div>
	)
}
export default PromptsPage
