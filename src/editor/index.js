import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './action'

import SampleData from './../sample'

import { Div, DomFactory } from './../dom'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
	
class Editor extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.actions.init(SampleData)
	}

	getPageBlock() {
		const { page_data } = this.props
		if(page_data) {
			return page_data.blocks.map((block) => {
				return DomFactory(block)
			})
		}
	}

	render() {
		return <Layout style={{ minHeight: '100vh' }}>
        <Sider>
			<div className="wb_toolbox">
			</div>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div className="wb_view">
				{this.getPageBlock()}
			</div>
          </Content>
        </Layout>
      </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
