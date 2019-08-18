import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeInfoUpdate, employeeCreate, employeeResetForm } from '../actions/employee-actions';

import EmployeeForm from './employee-form';
import Card from './common/card';
import CardSection from './common/card-section';
import Button from './common/button';

class EmployeeCreate extends Component {
    onButtonPress = () => {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>

                <CardSection>
                    <Button onPress={this.onButtonPress}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, { employeeInfoUpdate, employeeCreate, employeeResetForm })(EmployeeCreate);