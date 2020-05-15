/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions
	const oldPage = Object.assign({}, page)

	if (page.context.language === 'de') {
		page.context.language = page.context.intl.language + '-' + 'de'
	} else if (page.context.language === 'en') {
		page.context.language = page.context.intl.language + '-' + 'gb'
	}

	if (page.context.language !== oldPage.context.language) {
		// Replace new page with old page
		deletePage(oldPage)
		createPage({
			...page,
			context: {
				...page.context,
				locale: page.context.language
			}
		})
	}
}
