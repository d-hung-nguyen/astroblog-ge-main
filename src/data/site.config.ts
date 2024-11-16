interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Hung Nguyen', // Site author
	title: 'Global Elite & Associates', // Site title.
	description:
		'Global Elite & Associates is a representative agency that provides bespoke luxury hospitality sales in DACH markets, UK, Central Europe, Benelux and the Nordics.', // Website description
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
