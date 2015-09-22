import app from 'ampersand-app'

window.app = app

app.extend({
	init () {
		console.log('Begin app initialization...')
		console.log('App initialization complete.')
	}
})

app.init()
