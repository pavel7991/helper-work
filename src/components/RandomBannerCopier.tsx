import {useState} from "react";
import {bannerContentData} from "../data/data.ts";
import random from "../utils/randomArr.ts";
import copyToClipboard from "../utils/copyToClipboard.ts";
import Button from "./ui/Button.tsx";
import BannerPreview from "./ui/BannerPreview.tsx";

const RandomBannerCopier = () => {

  const [bannersTexts, setBannersTexts] = useState({
    en: {banner: '', button: ''},
    ru: {banner: '', button: ''}
  })

  const onClickHandler = async (arr) => {
    const result = random(arr)

    const [bannerTextEn, buttonTextEn] = result[0].split(' | ')
    const [bannerTextRu, buttonTextRu] = result[1].split(' | ')

    setBannersTexts({
      en: {banner: bannerTextEn, button: buttonTextEn},
      ru: {banner: bannerTextRu, button: buttonTextRu}
    })
    copyToClipboard(`${bannerTextEn} ${buttonTextEn}`)
  }

  return (
    <>
      <div className="flex gap-x-2">
        <Button onClick={() => onClickHandler(bannerContentData.mixSlovenia)}>Slovenia - Словения</Button>
        {/*<Button onClick={() => onClickHandler(bannerContentData.mixRoman)}>Roman - Румыния</Button>*/}
        {/*<Button onClick={() => onClickHandler(bannerContentData.mixEN)}>Mix Casino</Button>*/}
      </div>


      <div className="grid grid-cols-2 gap-x-4 bg-indigo-100 p-4 my-4 rounded-lg border border-gray-800">
        <BannerPreview textBanner={bannersTexts.en.banner} textButton={bannersTexts.en.button}/>
        <BannerPreview textBanner={bannersTexts.ru.banner} textButton={bannersTexts.ru.button}/>
      </div>
    </>
  )
}
export default RandomBannerCopier
