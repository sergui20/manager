import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
        <View styles={containerStyle}>
            <Text styles={labelStyle}>{props.label}:</Text>
            <TextInput secureTextEntry={props.hideText} placeholder={props.placeholder} autoCorrect={false} style={inputStyle} onChangeText={props.onChangeText} value={props.value}></TextInput>
        </View>
    )
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    inputStyle: {
        color: '#000',
        paddingTop: 0,
        paddingBottom: 0,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23
    }
};

export default Input;