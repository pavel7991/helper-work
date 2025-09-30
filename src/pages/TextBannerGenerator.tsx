import { useState } from 'react'
import { type BannerTuple } from '../data/data.ts'
import random from '../utils/randomArr.ts'
import copyToClipboard from '../utils/copyToClipboard.ts'
import Button from '../shared/Button.tsx'
import BannerPreview from '../widgets/BannerPreview'
import { croatia } from '../data/lang/croatia.ts'

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
				<Button onClick={() => onClickHandler(croatia)}>Хорватия</Button>
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixEN)}>English - Английский</Button>*/}
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixMexico)}>Mexico - Испанский</Button>*/}
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixGreek)}>Greek - Греция</Button>*/}
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixGermany)}>Germany - Германия</Button>*/}
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixSlovenia)}>Slovenia - Словения</Button>*/}
				{/*<Button onClick={() => onClickHandler(bannerContentData.mixRoman)}>Roman - Румыния</Button>*/}
			</div>

			<div className="grid grid-cols-2 gap-x-4 bg-neutral-900 p-4 my-4 rounded-lg border border-gray-800">
				<BannerPreview textBanner={bannersTexts.lang.banner} textButton={bannersTexts.lang.button} />
				<BannerPreview textBanner={bannersTexts.ru.banner} textButton={bannersTexts.ru.button} />
			</div>
		</>
	)
}
export default TextBannerGenerator
