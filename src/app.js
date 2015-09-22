import app from 'ampersand-app'
import Router from './router'

window.app = app

app.extend({
	init () {
		console.log('Begin app initialization...')
		this.router = new Router();
		this.router.history.start()
		console.log('App initialization complete.')
	}
})

app.init()
