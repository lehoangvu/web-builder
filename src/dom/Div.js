import React from 'react'
import DOM from './DOM'
import BreakPointFactory from './BreakPointFactory'

class Div extends DOM {
	constructor(props) {
		super(props)
		this.state = {
			...this.state,
			type: 'Div',
			style: {
				...this._createDefaultStyle(),
				...props.style
			},
			breakpoint: {
				...this._createDefaultBreakPoint(),
				...props.breakpoint
			},
			children: props.children
		}
	}

	_createDefaultStyle() {
		return {
			marginTop: 0,
			marginRight: 0,
			marginBottom: 0,
			marginLeft: 0,
			paddingTop: 0,
			paddingRight: 0,
			paddingBottom: 0,
			paddingLeft: 0,
			display: 'inline-block',
			boxSizing: 'border-box',
			position: 'relative'
		}
	}

	_createDefaultBreakPoint() {
		return {
			xs: {
				width: '100%',
				minHeight: 50
			},
			sm: {
				width: '100%',
				minHeight: 100
			},
			md: {
				width: '100%',
				minHeight: 150
			},
			lg: {
				width: '100%',
				minHeight: 150
			},
			xl: {
				width: '100%',
				minHeight: 250
			}
		}
	}

	render() {
		const { style, children, breakpoint } = this.state
		const _class = this._computeClass()

		return <div className={_class} style={style}>
				{BreakPointFactory(breakpoint, _class)}
				{children}
			</div>
	}
}

export default Div
