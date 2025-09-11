interface BannerPreviewProps {
	textBanner?: string
	textButton?: string
}

const BannerPreview = ({ textBanner, textButton }: BannerPreviewProps) => {
	return (
		<div className="aspect-21/9 flex flex-col items-center justify-center gap-2 p-4 border border-gray-800 rounded-lg bg-[url(/banner_bg.png)] bg-cover bg-center">
			<div className="py-4 px-8 text-3xl font-medium bg-gray-950/75 text-center text-white rounded-xl">
				{textBanner ? textBanner : 'Banner Text'}
			</div>
			<span className="bg-sky-700 rounded-sm py-1 px-2 text-white">{textButton ? textButton : 'Button Text'}</span>
		</div>
	)
}
export default BannerPreview
