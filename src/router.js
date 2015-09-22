import Router from 'ampersand-router'
import React from 'react'
import Layout from './layout'
import StartUpPage from './pages/startup'

export default Router.extend({
	renderPage (page, opts = {layout: true}) {
		if (opts.layout) {
			page = (
				<Layout>
					{page}
				</Layout>
			)
		}
		
		React.render(page, document.body)
	},

	routes: {
		'': 'startup'
	},

	startup () {
		console.log('startup page')
		this.renderPage(<StartUpPage me={{name: 'Boyma'}} />, {layout: false})
	}
})
