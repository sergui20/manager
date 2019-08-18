import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeInfoUpdate } from '../actions';

import CardSection from './common/card-section';
import Input from './common/input';

class EmployeeForm extends Component {
    onChangeEmployeeName = (text) => {
        this.props.employeeInfoUpdate({ prop: 'name', value: text })
    }

    onChangeEmployeePhone = (text) => {
        this.props.employeeInfoUpdate({ prop: 'phone', value: text })
    }

    onChangeEmployeeShift = (item) => {
        this.props.employeeInfoUpdate({ prop: 'shift', value: item })
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input label="Name" placeholder="Name" onChangeText={this.onChangeEmployeeName} value={this.props.name}></Input>
                </CardSection>

                <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" onChangeText={this.onChangeEmployeePhone} value={this.props.phone}></Input>
                </CardSection>

                <CardSection style={styles.containerStyle}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <View style={{ flex: 2, height: 40 }}>
                        <Picker selectedValue={this.props.shift} onValueChange={this.onChangeEmployeeShift} style={{ flex: 1 }}>
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                </CardSection>
            </View>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        alignItems: 'center'
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

export default connect(mapStateToProps, { employeeInfoUpdate })(EmployeeForm);