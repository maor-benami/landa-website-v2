import fetchBannerText from '@content/fetchBannerText'

const res = await fetchBannerText()
console.log(res)

function Banner() {
	return (
		<h1>test</h1>
	)
}

export default Banner