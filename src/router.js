// Define all the views for our app
import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';

import LoginForm from './components/login-form';
import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/add-employee';
import EmployeeEdit from './components/employeeEdit';

function RouterComponent () {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Stack key="auth" titleStyle={styles.loginScene}>
                    <Scene key="login" component={LoginForm} title="Please Login" initial />
                </Stack>
                <Stack key="main">
                    <Scene key="employeeList" component={EmployeeList} title="Employees" rightTitle="Add" onRight={() => Actions.employeeCreate()} initial />
                    <Scene key="employeeCreate" component={EmployeeCreate} title="Add employee" />
                    <Scene key="employeeEdit" component={EmployeeEdit} title="Edit employee" />
                </Stack>
            </Stack>
        </Router>
    )
};

const styles = {
    loginScene: {
        flex: 1,
        textAlign: 'center'
    }
}

export default RouterComponent;