interface BannerPreviewProps {
	textBanner?: string
	textButton?: string
}

const BannerPreview = ({ textBanner, textButton }: BannerPreviewProps) => {
	return (
		<div className="flex flex-col items-center gap-2 p-4 border border-gray-800 rounded-lg bg-[url(/banner_bg.png)] bg-cover bg-center">
			<div className="py-4 px-8 bg-gray-950/80 text-center text-white rounded-xl">
				{textBanner ? textBanner : 'Banner Text'}
			</div>
			<span className="bg-sky-700 rounded-sm py-1 px-2 text-white">{textButton ? textButton : 'Button Text'}</span>
		</div>
	)
}
export default BannerPreview
