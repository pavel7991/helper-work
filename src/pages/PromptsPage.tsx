import { Link, useParams } from 'react-router-dom'
import promptsData from '../data/promtsData.ts'
import copyToClipboard from '../utils/copyToClipboard.ts'

const PromptsPage = () => {
	const { category } = useParams()

	const activeCategory = promptsData.find((cat) => cat.key === category) || promptsData[0]

	return (
		<div>
			<nav className="flex flex-wrap gap-x-3 gap-y-2 mb-6">
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

			<div className="grid grid-cols-4 gap-x-4">
				{activeCategory.prompts.map((prompt, index) => (
					<div
						key={index}
						className="group relative overflow-hidden aspect-21/9 border p-2 rounded-lg mb-4"
						style={{
							backgroundImage: prompt.img ? `url("${prompt.img}")` : 'none',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundColor: prompt.img ? undefined : 'rgba(0, 0, 0, 0.5)'
						}}
					>
						<p className="inline-flex px-2 py-1 bg-red-500/90 rounded-sm shadow-lg">{prompt.name}</p>
						<p className="hidden">{prompt.promptText}</p>

						<div className="absolute inset-0 flex justify-center items-center opacity-0 bg-gray-500/50 group-hover:opacity-100 transition-opacity">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer
							px-3 py-1 rounded-md"
								onClick={async () => await copyToClipboard(prompt.promptText)}
							>
								COPY PROMPT
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default PromptsPage
