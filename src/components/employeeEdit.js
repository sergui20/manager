import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { employeeInfoUpdate, employeeSave, employeeDelete } from '../actions';
 
import EmployeeForm from './employee-form';
import Card from './common/card';
import CardSection from './common/card-section';
import Button from './common/button';
import ConfirmModal from './common/confirm-modal';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    UNSAFE_componentWillMount() {
        console.log(this.props.employee)
        _.each(this.props.employee.item, (value, prop) => {
            this.props.employeeInfoUpdate({ prop, value });
        })
    }

    onSaveEmployeeInfo = () => {
        const { name, phone, shift } = this.props;

        console.log(this.props.employee)

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.item.uid })
    }

    onSendText = () => {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    toggleModal = () => {
        this.setState({
            showModal: ! this.state.showModal
        })
    }

    onAccept = () => {
        this.props.employeeDelete({ uid: this.props.employee.item.uid })
    }

    onDecline = () => {
        this.toggleModal()
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onSaveEmployeeInfo}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onSendText}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.toggleModal}>Fire Employee</Button>
                </CardSection>

                <ConfirmModal visible={this.state.showModal} onAccept={this.onAccept} onDecline={this.onDecline}>
                    Are you sure you want to delete this employee?
                </ConfirmModal>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, { employeeInfoUpdate, employeeSave, employeeDelete })(EmployeeEdit);