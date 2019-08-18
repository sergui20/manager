import React from 'react';
import { Text, View, Modal } from 'react-native';

import CardSection from './card-section';
import Button from './button';

function ConfirmModal (props) {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal visible={props.visible} transparent animationType="slide" onRequestClose={() => {}}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{props.children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={props.onAccept}>Yes</Button>
                    <Button onPress={props.onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    )
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export default ConfirmModal;