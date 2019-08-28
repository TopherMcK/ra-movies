import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { globalStyle } from '../utils/GlobalStyles';
import { ButtonScaler } from '../utils/ButtonScaler';
import firebase from 'react-native-firebase';

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null}

    handleLogin = () => {
        const { email, password } = this.state;
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('DrawerNav'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={globalStyle.LoginContainer}>
                <View style={globalStyle.LoginSpacer}></View>
                <View id="loginWrapper" style={globalStyle.LoginView}>
                    <View id="contentView" style={globalStyle.LoginContentView}>
                        <Image id="storefrontImg" style={globalStyle.LoginLogo} source={require('../../assets/main_logo.png')} />
                        <View id="usernameWrapper" style={globalStyle.LoginGroup}>
                            <Text style={globalStyle.LoginLabel}>Login</Text>
                            {this.state.errorMessage &&
                                <Text style={{ color: 'red' }}>
                                    {this.state.errorMessage}
                                </Text>}
                            <View id="usernameWrapper" style={globalStyle.LoginGroup}>
                                <TextInput
                                    placeholder='Email'
                                    autoCapitalize='none'
                                    style={globalStyle.InputField}
                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                />
                            </View>
                            <View id="passwordWrapper" style={globalStyle.LoginGroup}>
                                <TextInput
                                    secureTextEntry
                                    placeholder='Password'
                                    autoCapitalize='none'
                                    style={globalStyle.InputField}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                            </View>
                            <View id="buttonsWrapper" style={globalStyle.LoginGroup}>
                                <ButtonScaler activeOpacity={1} id="signupBtn" style={this.disabled ? globalStyle.LoginButtonPressed : globalStyle.LoginButton} disabled={false} onPress={this.handleLogin}>
                                    <Text style={globalStyle.LoginButtonText}>Login</Text>
                                </ButtonScaler>
                            </View>
                            <View id="buttonsWrapper" style={globalStyle.LoginGroup}>
                                <ButtonScaler activeOpacity={1} style={globalStyle.LoginButton} onPress={() => this.props.navigation.navigate('SignUp')}>
                                    <Text style={globalStyle.LoginButtonText}>Don't have an account? Sign Up</Text>
                                </ButtonScaler>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}