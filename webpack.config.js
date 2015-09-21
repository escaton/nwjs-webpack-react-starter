var getConfig = require('hjs-webpack')

var config = getConfig({
	in: 'src/app.js',
	out: 'public',
	clearBeforeBuild: true
})

config.target = 'node-webkit'
module.exports = config
