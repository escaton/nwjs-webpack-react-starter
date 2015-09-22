import React from 'react'

export default React.createClass({
	displayName: 'Layout',

	render () {
		const {me = {data: 'data'}, children} = this.props

		return (
			{children}
		)
	}

})
