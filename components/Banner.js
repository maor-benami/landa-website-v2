import fetchBannerText from '@content/fetchBannerText'

async function Banner() {
	const res = await fetchBannerText()
	console.log(res)
	
	return (
		<h1>test</h1>
	)
}

export default Banner