import React from 'react';
import { View } from 'react-native';

function CardSection(props) {
    return (
        <View style={[style.containerStyle, props.style]}>
            {props.children}
        </View>
    );
}

const style = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardSection;
