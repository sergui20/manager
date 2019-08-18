import firebase from 'firebase';

import { EMPLOYEE_INFO_UPDATE, EMPLOYEE_FORM_RESET, EMPLOYEES_FETCH_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeInfoUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_INFO_UPDATE,
        payload: {
            prop, value
        }
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        // /users/123456/employees
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_FORM_RESET
                })
                Actions.pop()
            })
    };
}

export const fetchEmployees = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', (snapshot) => {
                
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
}

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({
                    type: EMPLOYEE_FORM_RESET
                })
                Actions.pop()
            })
    }
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .remove()
            .then(() => {
                Actions.pop()
            })
    }
}