import React from 'react'

const _toPx = (screen) => {
	const s2px = {
		xs: '0px',
		sm: '540px',
		md: '720px',
		lg: '960px',
		xl: '1140px'
	}
	return s2px[screen]
}

const _unit = (num) => {
	if(typeof num  === 'number') return `${num}px`;
	return num;
}

const BreakPointFactory = (breakpoints, class_name) => {
	return <style>
		{
			Object.keys(breakpoints).map((screen) => {
				const { width, minHeight } = breakpoints[screen];
				return `@media (min-width: ${_toPx(screen)}) { .${class_name} { width: ${_unit(width)}; min-height: ${_unit(minHeight)};  } }`
			})
		}
	</style>
}

export default BreakPointFactory
