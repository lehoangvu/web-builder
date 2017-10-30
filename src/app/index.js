import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from './components/Header'

class App extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return <div className="main-layout">
				<Header/>
				{this.props.children}
			</div>
	}
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({

    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
