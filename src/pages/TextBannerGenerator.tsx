import { useState } from 'react'
import random from '../utils/randomArr.ts'
import copyToClipboard from '../utils/copyToClipboard.ts'
import Button from '../shared/Button.tsx'
import BannerPreview from '../widgets/BannerPreview'

import type { BannerTuple } from '../data/lang/types.ts'
import { croatian } from '../data/lang/croatian.ts'
import { slovenian } from '../data/lang/slovenian.ts'
import { german } from '../data/lang/german.ts'

const TextBannerGenerator = () => {
	const [bannersTexts, setBannersTexts] = useState({
		lang: { banner: '', button: '' },
		ru: { banner: '', button: '' }
	})

	const onClickHandler = async (arr: Array<BannerTuple>) => {
		const result = random(arr)

		const [bannerText, buttonText] = result[0].split(' | ')
		const [bannerTextRu, buttonTextRu] = result[1].split(' | ')

		setBannersTexts({
			lang: { banner: bannerText, button: buttonText.toUpperCase() },
			ru: { banner: bannerTextRu, button: buttonTextRu }
		})
		await copyToClipboard(`${bannerText} ${buttonText.toUpperCase()}`)
	}

	return (
		<>
			<div className="flex gap-x-2">
				<Button onClick={() => onClickHandler(slovenian)}>Словения (словенский)</Button>
				<Button onClick={() => onClickHandler(croatian)}>Хорватия (хорватский)</Button>
				<Button onClick={() => onClickHandler(german)}>Германия (немецкий)</Button>
			</div>

			<div className="grid grid-cols-2 gap-x-4 bg-neutral-900 p-4 my-4 rounded-lg border border-gray-800">
				<BannerPreview textBanner={bannersTexts.lang.banner} textButton={bannersTexts.lang.button} />
				<BannerPreview textBanner={bannersTexts.ru.banner} textButton={bannersTexts.ru.button} />
			</div>
		</>
	)
}
export default TextBannerGenerator
