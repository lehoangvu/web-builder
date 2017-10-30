import React from 'react'

export default class BootstrapResource extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div className="bootstrap-resources">
			<link rel="stylesheet" href="/public/css/bootstrap_prefixing.css" />
		</div>
	}
}