import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import CardSection from './common/card-section';

class ListItem extends Component {
    onPressEmployeeInfo = () => {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        return(
            <TouchableWithoutFeedback onPress={this.onPressEmployeeInfo}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {this.props.employee.item.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;