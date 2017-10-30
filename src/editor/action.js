import c from './const'
import { actionTypeCreator } from './../libraries'

const _ = actionTypeCreator(c.MODULE_NAME)

export const init = (page_data) => {
	return {
		type: _('init'),
		page_data
	}
}