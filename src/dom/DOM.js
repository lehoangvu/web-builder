import React from 'react'

class DOM extends React.Component {
	constructor(props) {
		super(props)

	}

	_computeClass() {
		const { type } = this.state
		const { index } = this.props
		return `${type}_${index}`
	}
}

export default DOM