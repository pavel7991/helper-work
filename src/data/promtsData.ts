const promptsData = [
	{
		key: 'neutral',
		label: 'Нейтральный фон',
		prompts: [
			{
				name: 'Нейтральный 1',
				promptText:
					'Luxurious VIP lounge, marble table covered with crisp banknotes and scattered betting slips, tall stacks of poker chips beside a glowing roulette wheel in the background, moody rim lighting, photorealistic 8K textures, cinematic depth, ultra-detailed realism',
				img: '/prompts/neutral-bg/neutral-1.webp'
			},
			{
				name: 'Нейтральный 2',
				promptText:
					'Macro shot of a poker table, 8K, hyperrealism. Impeccably polished poker table wood, scattered with stacks of chips of various denominations—jade green, fiery red, jet black. Depth of field focused on the wood grain and chips, several playing cards nearby, their minimalist design and small details perfectly visible. Bokeh background with blurred chandelier light and silhouettes of players. Cinematic lighting, moody atmosphere',
				img: '/prompts/neutral-bg/neutral-2.webp'
			},
			{
				name: 'Нейтральный 3',
				promptText:
					'Organized chaos of high stakes, 8K, hyperrealism. Top-down view of green poker table felt. Neat, tall stacks of high-denomination poker chips are lined up. Nearby, playing cards with sharp, clear edges are scattered, along with several dice with perfectly rendered pips. An open gold lighter and an ashtray sit nearby. Flawless depth of field, the texture of the felt and chips is worked out to the smallest detail. Cinematic lighting.',
				img: '/prompts/neutral-bg/neutral-3.webp'
			},
			{
				name: 'Нейтральный 4',
				promptText:
					'A private VIP casino desk with marble surface, elegant golden chips, crisp betting slips, roulette wheel in the background, cinematic moody lighting, 8K ultra-realistic detail',
				img: '/prompts/neutral-bg/neutral-4.webp'
			},
			{
				name: 'Деньги',
				promptText:
					'Stacks of crisp hundred-dollar bills piled high, exploding into the air with flying poker chips and glowing golden coins, realistic casino background, 8K ultra-detailed textures, cinematic depth',
				img: '/prompts/neutral-bg/money.webp'
			},
			{
				name: 'Деньги 2',
				promptText:
					'A luxurious private casino vault filled with golden coins, poker chips, and banknotes spilling out of briefcases. Moody rim lighting, photorealistic 8K detail, dramatic realism',
				img: '/prompts/neutral-bg/money-2.webp'
			},
			{
				name: 'Рулетка',
				promptText:
					'Luxurious roulette wheel in the center, 8K, photographic detail. A roulette wheel made of polished rosewood and gleaming brass, every number and every notch perfectly visible. An ivory ball rests on a black sector. The sharpness reveals the wood texture and the finest scratches on the metal. Golden tokens and a few crisp banknotes lie on the green felt of the table. Dramatic rim lighting emphasizes the depth of the scene',
				img: '/prompts/neutral-bg/roulette.webp'
			},
			{
				name: 'Blackjack',
				promptText:
					'A luxurious blackjack table with playing cards, poker chips, and stacks of cash, glowing ambient casino lighting, 8K ultra-realistic textures, cinematic luxury finish',
				img: '/prompts/neutral-bg/blackjack-table.webp'
			}
		]
	},
	{
		key: 'cartoon',
		label: 'Мультяшные',
		prompts: [
			{
				name: 'Гламурная девушка',
				promptText:
					'Cartoon glamorous casino-style character in Casino World aesthetic. A stylish woman in a sparkling red evening dress, holding a martini glass and colorful poker chips. Surrounded by glowing slot machine symbols, vibrant colors, and a playful animated casino atmosphere.',
				img: '/prompts/cartoons/glamorous-girl.webp'
			},
			{
				name: 'Джентельмен удачи',
				promptText:
					'Cartoon casino-style character inspired by Casino World. A charming man in a tuxedo with exaggerated proportions, holding glowing poker chips in one hand and a deck of cards in the other. Bright neon colors, playful casino vibe, soft 3D textures, and a cheerful expression.',
				img: '/prompts/cartoons/lucky-man.webp'
			},
			{
				name: 'Король казино',
				promptText:
					'Cartoon casino-style character inspired by Casino World. A charming man in a tuxedo with exaggerated proportions, holding glowing poker chips in one hand and a deck of cards in the other. Bright neon colors, playful casino vibe, soft 3D textures, and a cheerful expression.',
				img: '/prompts/cartoons/king-casino.webp'
			},
			{
				name: 'Весельчак',
				promptText:
					'Funny cartoon casino-style character inspired by Casino World. A goofy man in a bright Hawaiian shirt with oversized sunglasses, juggling dice and poker chips. Exaggerated proportions, colorful and humorous, with a playful casino background of slot machines and glowing lights.',
				img: '/prompts/cartoons/funny-man.webp'
			},
			{
				name: 'Король королева',
				promptText:
					'Cartoon king and queen sitting on a throne made of casino chips, holding royal slot levers. Queen throws gold coins like confetti, king laughs with a crown tilting. Bright fantasy colors, royal red and gold tones, comical jackpot celebration in the background',
				img: '/prompts/cartoons/king-queen.webp'
			},
			{
				name: 'Король + slot',
				promptText:
					'Pixar-style King in a majestic golden crown and royal robe, confidently pulling the lever of a glowing slot machine shaped like a throne. Piles of gold coins and casino chips scatter around, 8K cinematic realism',
				img: '/prompts/cartoons/king-slot.webp'
			},
			{
				name: 'Королева',
				promptText:
					'Pixar-style Queen in a sparkling violet gown with diamond jewelry, standing at a roulette table glowing with neon lights. Magical casino cards float around her, 8K vibrant detail, cartoonish semi-realism',
				img: '/prompts/cartoons/queen.webp'
			},
			{
				name: 'Пираты',
				promptText:
					'Сartoon pirate king and pirate queen sitting on a grand throne made of colorful casino chips and gold doubloons. The queen playfully tosses gold coins into the air like confetti, while the king laughs with a tilted pirate hat and an eyepatch, holding a slot machine lever shaped like a ship’s wheel. Behind them, a vibrant pirate ship casino with glowing slot reels and a roulette wheel on the deck. Bright fantasy colors, deep ocean blues, royal red and gold tones, comical jackpot celebration, playful and detailed style',
				img: '/prompts/cartoons/pirats.webp'
			},
			{
				name: 'Ковбой',
				promptText:
					'Funny cartoon cowboy in a classic western outfit with a wide-brimmed hat, leather vest, and boots with spurs, holding oversized dice in one hand and leaning casually on a glowing slot machine. A shiny belt buckle shaped like a poker chip, confident grin on his face. Background filled with floating poker cards, stacks of gold coins, and neon lights blending western saloon vibes with casino energy. Comic-style shadows, vibrant colors, playful and highly detailed style',
				img: '/prompts/cartoons/cowboy.webp'
			},
			{
				name: 'Девушка ковбой',
				promptText:
					'Pixar-style Cowgirl in a red plaid shirt and jeans, leaning against a roulette wheel shaped like a wagon wheel. Golden coins and chips sparkle in the desert night. 8K semi-realistic Pixar animation',
				img: '/prompts/cartoons/girl-cowboy.webp'
			},
			{
				name: 'Рыцарь',
				promptText:
					'Pixar-style Knight in polished silver armor with a glowing sword shaped like a poker chip. He stands on a mountain of casino chips and gold coins, neon slot machines in the background. 8K ultra-detailed',
				img: '/prompts/cartoons/death-knight.webp'
			},
			{
				name: 'Рыцарь Покера',
				promptText:
					'Funny Pixar-style knight with a huge sword, using it to push casino chips into the center of a blackjack table, playful cinematic vibe',
				img: '/prompts/cartoons/knight-poker.webp'
			},
			{
				name: 'Карикатурный Гангстер',
				promptText:
					'Funny cartoon gangster in a pinstripe suit holding oversized dice in one hand, leaning casually on a glowing slot machine. Wearing a gold chain and fedora hat, with a confident grin. Background filled with floating poker cards, neon lights, and swirling stacks of cash and flying dollar bills. Classic mafia aesthetic meets casino vibes, comic-style shadows, bright and detailed',
				img: '/prompts/cartoons/comic-gangster.webp'
			},
			{
				name: 'Авантюрист',
				promptText:
					'Pixar-style Adventurer Man in a leather jacket with a glowing treasure map, standing beside a slot machine carved like an ancient temple. Coins and casino chips burst from the reels, 8K ultra-realistic cartoon style',
				img: '/prompts/cartoons/adventurer.webp'
			},
			{
				name: 'Ельф принц',
				promptText:
					'Pixar-style Elf Prince with glowing blue eyes, standing before a giant slot machine shaped like an enchanted tree. Golden leaves turn into poker chips as they fall. 8K semi-realistic cinematic style',
				img: '/prompts/cartoons/elf-prince.webp'
			}
		]
	},
	{
		key: 'gods-cartoon',
		label: 'Мультяшные боги',
		prompts: [
			{
				name: 'Руки-молнии',
				promptText:
					'Cartoon-style young heroic man with light blonde hair and a white beard, resembling the main character from Troy, wearing detailed fantasy armor. Blue lightning flows from his hands. He stands under a deep starry night sky. Around him are colorful casino chips and piles of gold coins. Bright, vibrant colors, cinematic lighting, dynamic composition. Rendered in Pixar-style 3D animation, with smooth textures and expressive features.',
				img: '/prompts/gods/lightning-hands.webp'
			},
			{
				name: 'Зевс',
				promptText:
					'Cartoon-style Zeus in gleaming golden-white armor, holding a glowing roulette wheel instead of a thunderbolt. Blue lightning arcs across the night sky as casino chips rain down around him. Pixar-style 3D, 8K ultra-detailed textures, expressive and heroic',
				img: '/prompts/gods/zeus.webp'
			},
			{
				name: 'Посейдон',
				promptText:
					'Pixar-style Poseidon, majestic with flowing aqua hair and beard, wielding a trident shaped like a giant slot machine lever. Glowing waves made of gold coins crash around him, colorful casino chips floating on the water. 8K cinematic vibrancy',
				img: '/prompts/gods/poseidon.webp'
			},
			{
				name: 'Аид',
				promptText:
					'Cartoon-style Hades in dark obsidian armor, fiery glowing dice in his hands. Behind him, a throne of black roulette wheels burns with purple and red light. Pixar-style 3D rendering, 8K ultra-detail, moody but playful atmosphere',
				img: '/prompts/gods/hades.webp'
			},
			{
				name: 'Арес',
				promptText:
					'Cartoon-style Ares, the god of war, armored in crimson and gold. Instead of weapons, he swings glowing playing cards like blades. He stands on a battlefield of poker chips and roulette wheels. Pixar 3D animation, 8K vibrant style',
				img: '/prompts/gods/ares.webp'
			},
			{
				name: 'Гермес',
				promptText:
					'Pixar-style Hermes, with winged sandals and a glowing golden staff. He races across a neon casino floor, leaving trails of sparkling coins and chips behind. Ultra-detailed 8K Pixar textures, playful and energetic',
				img: '/prompts/gods/hermes.webp'
			},
			{
				name: 'Афина',
				promptText:
					'Pixar-style Athena, armored in silver and purple, holding a radiant shield engraved with glowing slot reels. Enchanted casino dice float around her as magical owls scatter poker chips into the night sky. 8K cinematic composition',
				img: '/prompts/gods/athena.webp'
			},
			{
				name: 'Анубис',
				promptText:
					'Cartoon-style Anubis, jackal-headed god in golden Egyptian armor, standing by a glowing pyramid-shaped slot machine. Purple casino lights and magical hieroglyphs glow across the scene, 8K Pixar semi-realism',
				img: '/prompts/gods/anubis.webp'
			},
			{
				name: 'Тор',
				promptText:
					'Pixar-style Thor, heroic with a glowing hammer shaped like a giant poker chip. Thunder and lightning strike as casino coins rain from the sky, dynamic Pixar 3D animation style, 8K cinematic epic composition',
				img: '/prompts/gods/thor.webp'
			},
			{
				name: 'Дионис',
				promptText:
					'Pixar-style Dionysus, god of wine and pleasure, laughing joyfully while tossing glowing dice into the air. Behind him, slot machines erupt like fountains of coins and grape vines curl around roulette wheels. Bright and playful, 8K high detail',
				img: '/prompts/gods/dionysus.webp'
			}
		]
	},
	{
		key: 'animals',
		label: 'Animals',
		prompts: [
			{
				name: 'Лев',
				promptText:
					'Cartoon-style casino banner featuring a charismatic lion wearing sunglasses and a flashy red jacket, confidently standing next to a slot machine with glowing reels, golden coins bursting into the air, vibrant lights, Pixar-like detailed cartoon style, warm and energetic vibe, mobile format',
				img: '/prompts/animals/lion.webp'
			},
			{
				name: 'Енот',
				promptText:
					'Cartoon-style casino banner featuring a cheeky raccoon in a blue vest, holding casino chips in both hands, standing on top of a slot machine with glowing colorful lights, shiny coins flying around, Pixar-style ultra-detailed cartoon, playful and fun atmosphere, mobile format',
				img: '/prompts/animals/raccoon.webp'
			},
			{
				name: 'Попугай',
				promptText:
					'Cartoon-style casino banner featuring a playful blue parrot wearing cool sunglasses, standing on top of a slot machine while holding casino chips in its claws, golden coins and colorful confetti flying around, bright neon lights, Pixar-like cartoon style, highly detailed, cheerful and engaging atmosphere, mobile format',
				img: '/prompts/animals/parrot.webp'
			},
			{
				name: 'Горилла',
				promptText:
					'Cartoon-style casino banner: a gorilla in a golden crown laughing while tossing glowing cards into the air, stacks of poker chips around him, playful cartoon casino atmosphere, 8K vibrant details',
				img: '/prompts/animals/gorilla.webp'
			},
			{
				name: 'Лис',
				promptText:
					'Cartoon-style casino banner: a sly fox dealer in a red bow tie, standing at a poker table dealing glowing cards, slot machines shining behind, cinematic Pixar cartoon look, 8K high-resolution',
				img: '/prompts/animals/fox.webp'
			},
			{
				name: 'Обезьяна',
				promptText:
					'Cartoon-style casino banner: a dancing elephant in a tuxedo with golden dice in its hands, surrounded by glowing slot machines and poker tables, joyful cartoon Vegas vibe, Pixar-like cinematic detail, 8K',
				img: '/prompts/animals/monkey.webp'
			},
			{
				name: 'Тигр',
				promptText:
					'Cartoon-style casino banner: a proud tiger in a shiny purple jacket standing on golden coins, poker chips flying like confetti, colorful slot machines glowing, Pixar cartoon realism, 8K',
				img: '/prompts/animals/tiger.webp'
			}
		]
	},
	{
		key: 'safari',
		label: 'Сафари',
		prompts: [
			{
				name: 'Лев',
				promptText:
					'A cinematic 8K realistic artwork: a majestic lion standing on top of a glowing roulette wheel in the middle of the savannah, golden coins scattered across the desert sand, neon casino lights blending with the sunset horizon',
				img: '/prompts/safari/safari-lion.webp'
			},
			{
				name: 'Слон',
				promptText:
					'A hyper-realistic 8K casino safari artwork: an elephant with golden tusks walking through a casino hall, poker chips and cards floating around him, slot machines glowing behind like ancient totems',
				img: '/prompts/safari/safari-elephant.webp'
			},
			{
				name: 'Носорог',
				promptText:
					'A cinematic 8K realistic artwork: a rhino smashing a blackjack table with its horn, glowing cards and coins exploding into the air, casino hall blending with African savannah landscape',
				img: '/prompts/safari/safari-rhino.webp'
			},
			{
				name: 'Леопард',
				promptText:
					'A cinematic 8K realistic artwork: a cheetah leaping across slot machines in a desert casino, glowing sparks of coins and cards trailing behind, speed and energy frozen in epic detail',
				img: '/prompts/safari/safari-leaping.webp'
			}
		]
	},
	{
		key: 'live-сasino',
		label: 'Live Casino',
		prompts: [
			{
				name: 'Dark Casino',
				promptText:
					'A panoramic shot of a luxurious casino floor, glowing slot machines, roulette wheels, and stacks of chips on tables. Neon reflections, ultra-detailed 8K realism, cinematic wide shot',
				img: '/prompts/live-casino/dark-classic.webp'
			},
			{
				name: 'Monaco Night',
				promptText:
					"Monaco Night. Cinematic night shot, 8K. A panoramic view of a gaming hall from over the dealer's shoulder. Tables filled with people in tuxedos and evening gowns, roulette wheels, stacks of chips. In the distance, a large window reflects the room's lights and reveals the nighttime panorama of Monte-Carlo. Deep depth of field, warm lighting, countless details. Oceans Eleven style.",
				img: '/prompts/live-casino/monaco-night.webp'
			},
			{
				name: 'Gentleman Roulette',
				promptText:
					'A realistic man in his 30s confidently placing chips on a roulette table in a luxury casino. The wheel spins in motion blur, lights reflect on polished surfaces. Professional lighting, high-contrast, sharp details, atmospheric background of slot machines.',
				img: '/prompts/live-casino/gentleman-roulette.webp'
			},
			{
				name: 'Бизнесмен в казино',
				promptText:
					'A confident man in a sleek suit walking through a luxury casino lobby with rows of digital slot machines behind him. He holds casino chips and a drink, smiling subtly. Futuristic design, cinematic framing, luxury atmosphere.',
				img: '/prompts/live-casino/businessman-in-Casino.webp'
			},
			{
				name: 'Крупье',
				promptText:
					'A hyper-realistic 8K artwork: a live casino dealer in a tuxedo shuffling glowing cards, dramatic spotlight on the table, poker chips shimmering like jewels under cinematic lighting',
				img: '/prompts/live-casino/dealer.webp'
			},
			{
				name: 'Зал казино',
				promptText:
					'A cinematic 8K realistic artwork: a glamorous VIP lounge inside a casino, red velvet chairs, crystal chandeliers, poker chips glowing like precious gems on the tables',
				img: '/prompts/live-casino/hall-casino.webp'
			},
			{
				name: 'Зал Vegas',
				promptText:
					'A cinematic 8K Vegas casino artwork: a panoramic view of a grand casino hall, slot machines glowing like stars, roulette wheels spinning with neon trails, luxury and epic realism combined',
				img: '/prompts/live-casino/hall-vegas.webp'
			},
			{
				name: 'Крупье',
				promptText:
					'8K ultra-detailed realism: a confident male croupier in a black tuxedo deals cards at a blackjack table, with dramatic spotlights and luxury chandeliers above',
				img: '/prompts/live-casino/male-croupier.webp'
			},
			{
				name: 'Люди за покерным столом',
				promptText:
					'8K photorealistic scene: a group of friends laughing at a craps table, stacks of chips glowing under soft casino spotlights, champagne glasses in hand',
				img: '/prompts/live-casino/people-poker-table.webp'
			},
			{
				name: 'Босс казино',
				promptText:
					'8K realism: a mafia boss in a white suit smokes a cigar while spinning a roulette wheel, golden smoke trails in the air',
				img: '/prompts/live-casino/boss-roulette.webp'
			}
		]
	},
	{
		key: 'girls',
		label: 'Девушки',
		prompts: [
			{
				name: 'Luxury',
				promptText:
					'A hyper-realistic digital web banner for an online casino website. It features casino elements like chips, playing cards, and slot machines. The main character is a glamorous woman in a luxurious dress, standing confidently. Banner colors: background #16161616, main colors #f3e169 and #3e0127. Shot in ultra-HD, with cinematic lighting and high-fashion aesthetic.',
				img: '/prompts/girls/luxury.webp'
			},
			{
				name: 'Poker',
				promptText:
					'Luxurious VIP lounge, elegant woman in an evening dress spreads betting slips and crisp banknotes across a marble table, tall stacks of poker chips beside a roulette wheel in the background, moody rim lighting, photorealistic textures, cinematic depth',
				img: '/prompts/girls/girl-poker.webp'
			},
			{
				name: 'Bingo',
				promptText:
					'A hyper-realistic digital web banner for a bingo website. The scene features colorful bingo balls, a bingo lottery machine, and vibrant bingo cards in the background. The main character is a cheerful woman in a stylish outfit, actively playing bingo and holding a bingo card. Banner colors: background #16161616, main colors #f3e169 and #3e0127. Ultra-HD detail, soft cinematic lighting, high-fashion photography aesthetic.',
				img: '/prompts/girls/bingo-girl.webp'
			},
			{
				name: 'Кейс с деньгами',
				promptText:
					'Luxury-style semi-realistic digital web banner for an online casino website, blending smooth realism with subtle cartoon-style shading. Featuring elegant casino elements like golden poker chips, playing cards, and glowing slot machines. The main character is a glamorous woman in a luxurious dress with a sparkling diamond crown, standing confidently beside an open silver case overflowing with stacks of cash. Background in deep rich tones #161616, main colors #f3e169 and #3e0127, warm golden light accents. Ultra-HD quality, cinematic lighting, high-fashion luxurious aesthetic with a hint of artistic illustration',
				img: '/prompts/girls/girl-money-case.webp'
			},
			{
				name: 'Sexy woman',
				promptText:
					'A cinematic 8K realistic artwork: glamorous woman in a golden dress leaning on a roulette table, champagne glass in hand, neon lights reflecting in her jewelry, seductive casino vibe',
				img: '/prompts/girls/sexy-woman.webp'
			},
			{
				name: 'Девушка с картами',
				promptText:
					'8K detailed realism: an elegant woman with long dark hair holds playing cards in one hand and poker chips in the other, standing against a backdrop of glowing slot machines',
				img: '/prompts/girls/woman-poker-card.webp'
			},
			{
				name: 'Девушка с картами 2',
				promptText:
					'8K cinematic realism: a seductive femme fatale dealer in a black dress reveals cards at a blackjack table, glowing golden details',
				img: '/prompts/girls/woman-poker-card2.webp'
			}
		]
	},
	{
		key: 'bet',
		label: 'BET',
		prompts: [
			{
				name: 'Мужик + мониторы',
				promptText:
					'Ultra-realistic casino sports lounge with giant LED screens showing live games, elegant man in a tailored suit holding a betting slip and poker chips, stacks of cash and golden coins on the table, cinematic lighting',
				img: '/prompts/bet/man-monitors.webp'
			},
			{
				name: 'Удачная ставка',
				promptText:
					'Sports betting realism – A man in casual clothes cheering with raised hands, multiple big screens in the background showing football, basketball, and tennis matches with betting odds, money scattered on the table, ultra-realistic cinematic mood',
				img: '/prompts/bet/hands-up.webp'
			},
			{
				name: 'Огненный футболист',
				promptText:
					'Hyper-realistic scene: a European football striker in green uniform performs a powerful kick, sending a flaming soccer ball straight into the goal net. Behind him, golden poker chips and stacks of dollar bills explode into the air under glowing casino lights.',
				img: '/prompts/bet/football-player-fire.webp'
			},
			{
				name: 'Баскетболист',
				promptText:
					'A hyper-realistic 8K artwork: a basketball player in mid-air slam dunk, glowing poker chips exploding like sparks behind him, giant scoreboard showing flashing betting odds, cinematic stadium lighting',
				img: '/prompts/bet/basketball-player.webp'
			},
			{
				name: 'Нейтральные ставки',
				promptText:
					'A cinematic 8K realistic artwork: a sports bar filled with glowing screens showing football matches, betting slips scattered on tables, stacks of poker chips glowing beside cold drinks, cinematic realism',
				img: '/prompts/bet/neutral-bet.webp'
			},
			{
				name: 'Вызов',
				promptText:
					'A hyper-realistic 8K artwork: two rival football players facing off, lightning between them shaped like glowing betting odds, golden coins and banknotes floating in the dramatic stadium air.',
				img: '/prompts/bet/two-football-players.webp'
			},
			{
				name: 'Вратарь',
				promptText:
					'A hyper-realistic 8K artwork: a goalkeeper diving for a glowing ball made of neon chips and dice, the net shimmering with golden sparks, cinematic sports betting atmosphere.',
				img: '/prompts/bet/goalkeeper.webp'
			},
			{
				name: 'Футболист + кости',
				promptText:
					'8K realistic casino artwork: a football player in uniform rolls dice on a craps table, neon stadium lights blend with casino atmosphere',
				img: '/prompts/bet/football-player-chips.webp'
			}
		]
	},
	{
		key: 'mafia',
		label: 'Mafia',
		prompts: [
			{
				name: 'Gold Gungs',
				promptText:
					'A stylized semi-realistic 8K Mafia Vegas artwork: a man in a red jacket walks under neon signs with comic-style outlines, while a woman in a red shirt points golden pistols with exaggerated cartoon glow. Poker chips bounce in the air like animated effects',
				img: '/prompts/mafia/man-girl-gungs.webp'
			},
			{
				name: 'Gold Gungs 2',
				promptText:
					'8K stylized semi-realistic artwork: a man in a red blazer leans against a glowing slot machine while a woman in a red shirt with golden pistols strikes a cheeky pose. Neon lights shine with exaggerated cartoon vibrancy, chips and coins bounce around playfully.',
				img: '/prompts/mafia/man-girl-gungs-2.webp'
			},
			{
				name: 'Cadillac',
				promptText:
					'Cartoonish semi-realistic 8K artwork: a mafia couple in Vegas — man in a red suit, woman in a red shirt with golden guns — ride in the back of a vintage Cadillac. Neon reflections glow in bright comic colors, oversized dollar bills fly in a playful cartoon exaggeration',
				img: '/prompts/mafia/Cadillac.webp'
			}
		]
	},
	{
		key: 'sports',
		label: 'Sports',
		prompts: [
			{
				name: 'Comic Box',
				promptText:
					'A hyper-detailed 8K cartoonish semi-realistic casino scene: a boxer and a wrestler face off in a boxing ring made of neon slot machines and roulette wheels. The ropes are glowing playing cards, and the floor is covered with dollar bills and casino tokens',
				img: '/prompts/sports/comic-box.webp'
			},
			{
				name: 'Wrestlers',
				promptText:
					'8K semi-realistic stylized artwork: two wrestlers in colorful masks (lucha libre style) throw each other across a roulette table. Poker chips scatter like confetti, dice roll dramatically, neon casino signs shine in exaggerated comic style.',
				img: '/prompts/sports/wrestlers.webp'
			},
			{
				name: 'Wrestlers + Poker',
				promptText:
					'Cartoonish semi-realistic 8K casino banner: a tag-team wrestling duo slams their rival onto a poker table covered in chips and cash. Oversized cards fly in the air, neon jackpot signs glow with playful exaggeration',
				img: '/prompts/sports/wrestlers-poker.webp'
			}
		]
	},
	{
		key: 'epic',
		label: 'Epic',
		prompts: [
			{
				name: 'Рыцарь + Валькирия',
				promptText:
					'8K semi-realistic epic casino composition: a goddess of luck with radiant wings hovers over a battlefield of poker chips and cards. Below, armored knights clash while a giant roulette wheel glows like a mythical artifact.',
				img: '/prompts/epic/valkyrie-knight.webp'
			},
			{
				name: 'Рыцарь',
				promptText:
					'A hyper-detailed 8K cinematic artwork: an armored knight in shining silver plate stands on a mountain of glowing casino chips and golden coins, holding a massive sword shaped like a roulette wheel. Lightning cracks above, epic casino-mythology fusion',
				img: '/prompts/epic/epic-knight.webp'
			},
			{
				name: 'Валькирия',
				promptText:
					'8K semi-realistic epic casino banner: a Valkyrie warrior in golden armor descends from the skies, carrying glowing dice in her hands. Below, slot machines erupt with coins, dramatic fantasy lighting blends mythology with casino glamour',
				img: '/prompts/epic/epic-valkyrie.webp'
			},
			{
				name: 'Дракон + рулетка',
				promptText:
					'A hyper-detailed 8K cinematic artwork: a colossal dragon made of glowing golden casino chips coils around a giant roulette wheel like a crown. Its eyes burn like slot machine lights, spewing fire shaped as playing cards, epic semi-realistic casino fantasy',
				img: '/prompts/epic/dragon-wheel.webp'
			},
			{
				name: 'Дракон + покер',
				promptText:
					'Epic 8K cinematic artwork: a massive dragon battles a group of warriors around a giant poker table made of enchanted crystal and gold. The cards shine like runes, lightning strikes illuminate mountains of chips and coins, casino-fantasy mythology fusion',
				img: '/prompts/epic/dragon-poker.webp'
			},
			{
				name: 'Зевс',
				promptText:
					'A cinematic 8K fantasy artwork: Zeus in glowing golden armor slams a lightning bolt onto a roulette wheel, sparks exploding into flying poker chips and cards, casino floor glowing like Mount Olympus, semi-realistic with epic cartoon highlights',
				img: '/prompts/epic/zeus.webp'
			},
			{
				name: 'Epic wheel',
				promptText:
					'A cinematic 8K fantasy artwork: Athena in shimmering golden armor, standing beside a colossal roulette wheel shaped like a shield, glowing runes spinning across its edge, casino as a battlefield of wisdom and chance',
				img: '/prompts/epic/epic-wheel.webp'
			}
		]
	},
	{
		key: 'galaxy',
		label: 'Космос',
		prompts: [
			{
				name: 'Galaxy + Slot Machine',
				promptText:
					'Futuristic slot machine floating in deep space, surrounded by glowing planets shaped like giant casino chips and colorful poker symbols. A sleek astronaut in a reflective helmet floats nearby, reaching toward the machine. Behind them, massive planets and distant galaxies glow in neon purples, blues, and pinks, with laser spins and shimmering stardust. Highly detailed, vibrant lighting, cinematic sci-fi atmosphere',
				img: '/prompts/galaxy/galaxy-slot.webp'
			},
			{
				name: 'Волк астронавт',
				promptText:
					'Cartoonish semi-realistic casino artwork: a cool astronaut wolf in a shiny space suit playing poker on the surface of the Moon, glowing chips and cards floating in zero gravity, neon slot machines in the background, 8K cinematic detail',
				img: '/prompts/galaxy/galaxy-wolf.webp'
			},
			{
				name: 'Cosmic wheel',
				promptText:
					'Cartoonish semi-realistic cosmic casino scene: a stylish astronaut in a red jacket spinning a giant roulette wheel floating in zero gravity, the wheel glowing like a galaxy spiral, poker chips and neon stars around, 8K',
				img: '/prompts/galaxy/cosmic-wheel.webp'
			},
			{
				name: 'Робот дилер',
				promptText:
					'Cartoonish semi-realistic casino scene: a robot dealer with neon eyes dealing holographic cards at a space station casino, poker chips spinning like tiny planets in orbit, playful but cinematic 8K style.',
				img: '/prompts/galaxy/galaxy-robot.webp'
			}
		]
	}
]

export default promptsData
