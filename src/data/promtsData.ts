const promptsData = [
	{
		key: 'classic',
		label: 'Классика',
		prompts: [
			{ name: 'Classic', promptText: 'PROMPT FOR CLASSIC CASINO' },
			{ name: 'Casino Royale', promptText: 'PROMPT FOR CASINO ROYALE' }
		]
	},
	{
		key: 'girls',
		label: 'Девушки',
		prompts: [
			{
				name: 'Luxury Girl',
				promptText: 'PROMPT FOR LUXURY GIRL',
				img: '/prompts/girls/luxury.webp'
			},
			{ name: 'Girl Bingo', promptText: 'PROMPT FOR GIRL BINGO' }
		]
	}
]

export default promptsData
