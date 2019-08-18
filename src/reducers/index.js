import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import EmployeeFormReducer from './employee-form-reducer';
import EmployeeReducer from './employee-reducer';

export default combineReducers({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeeReducer
})