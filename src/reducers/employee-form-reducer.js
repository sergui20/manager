import { EMPLOYEE_INFO_UPDATE, EMPLOYEE_FORM_RESET } from '../actions/types';

const initialState = {
    name: '',
    phone: '',
    shift: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case EMPLOYEE_INFO_UPDATE:
            // action.payload === { prop: 'name', value: 'jane' }
            return { ...state, [action.payload.prop]: action.payload.value }    
        case EMPLOYEE_FORM_RESET:
            return state
        default:
            return state
    }
}