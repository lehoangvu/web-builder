import c from './const'
import { actionTypeCreator } from './../libraries'

const _ = actionTypeCreator(c.MODULE_NAME);

const intinalState = {
	page_data: null
}

export default (state = intinalState, action) => {
    switch(action.type){
    	case _('init'): {
    		return {
    			...state,
    			page_data: action.page_data
    		}
    	}
        default:
            return state;
    }
}
