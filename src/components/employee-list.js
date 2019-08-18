import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import ListItem from './list-item';

import { fetchEmployees } from '../actions/employee-actions';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.fetchEmployees();
    }

    renderEmployees = (employee) => {
        return (
            <ListItem employee={employee}/>
        )
    }

    render() {
        return (
            <FlatList data={this.props.employees} keyExtractor={(employee, index) => index.toString()} renderItem={this.renderEmployees}></FlatList>
        )
    }
}

const mapStateToProps = (state) => {
    const arr = _.map(state.employees, (val, uid) => {
        return { ...val, uid }
    })
    console.log(arr)
    return {
        employees: arr
    }
}

export default connect(mapStateToProps, { fetchEmployees })(EmployeeList);