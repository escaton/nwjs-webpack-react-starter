import React from 'react'

export default React.createClass({
	displayName: 'StartUpPage',

	render () {
		const {me, children} = this.props

		return (
			<div>
				<h1>Start Up Page</h1>
				<p>Hello, {me.name}</p>
			</div>
		)
	}
})
