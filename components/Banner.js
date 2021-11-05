import { fetchEntries } from '@content/fetchBannerText'

async function Banner() {
	const res = await fetchEntries()
	console.log(res)
	
	return (
		<h1>test</h1>
	)
}

export default Banner