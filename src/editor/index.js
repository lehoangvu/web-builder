import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './action'

import SampleData from './../sample'

import BootstrapResource from './components/BootstrapResource'

class Home extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.actions.init(SampleData)
	}
	render() {
		return <div>
			<BootstrapResource />
			<div className="wb_editor">
				<h1>Ahii</h1>
			</div>
		</div>
	}
}

const mapStateToProps = (state) => {
    return {
    	...state.editor
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
		init
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
