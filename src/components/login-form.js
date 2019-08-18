import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// Action creators
import { emailChanged, passwordChanged, loginUser } from '../actions/index';

import Card  from './common/card';
import CardSection  from './common/card-section';
import Input  from './common/input';
import Button  from './common/button';
import Spinner from './common/spinner';

class LoginForm extends Component {
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text)
    }

    onSubmit = () => {
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
     }

    renderError = () => {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Email" placeholder="email@gmail.com" onChangeText={this.onEmailChange} value={this.props.email}></Input>
                </CardSection>

                <CardSection>
                    <Input hideText label="Password" placeholder="password" onChangeText={this.onPasswordChange} value={this.props.password}></Input>
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {
                        this.props.loading ?
                        <Spinner />
                        :
                        <Button onPress={this.onSubmit}>Login</Button>
                    }
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);