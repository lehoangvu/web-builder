import React from 'react'
import * as DOM from './'


const DomFactory = (data, key = false) => {
	const { type, children } = data
	switch(type) {
		case 'Div' : {
			return <DOM.Div
						key={data.index}
						index={data.index}
						style={data.style}
						responsive={data.responsive}
						breakpoint={data.breakpoint}>
						{children.map((child) => { return DomFactory(child) })}
					</DOM.Div>
		}
		default: {
			return null
		}
	}
}

export default DomFactory

