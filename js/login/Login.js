import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { isValidUsername, isValidPassword } from './LoginValidation';
import { userDataService } from '../observers/UserDataService';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            hasValidUsername: false,
        }
    }

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View id="loginWrapper" style={loginStyles.loginWrapper}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image id="storefrontImg" style={loginStyles.storefrontImg} source={require('../../assets/storefront.jpg')} />
                    <Text id="loginTitle" style={loginStyles.header}>Sign In</Text>
                </View>

                <View id="usernameWrapper" style={loginStyles.usernameWrapper}>
                    <Text id="usernameLabel" style={loginStyles.inputLabel}>User Name</Text>
                    <TextInput id="usernameTextInput" style={loginStyles.textInputs} onChangeText={(value) => this.onUNInput(value)}></TextInput>
                </View>
                <View id="passwordWrapper" style={loginStyles.passwordWrapper}>
                    <Text id="passwordLabel" style={loginStyles.inputLabel}>Password</Text>
                    <TextInput id="passwordTextInput" style={loginStyles.textInputs} autoCompleteType="password" onChangeText={(value) => this.onPasswordInput(value)}></TextInput>
                </View>
                <View id="buttonsWrapper" style={loginStyles.buttonsWrapper}>
                    <Button id="signInBtn" title="Sign In" style={loginStyles.btns} disabled={!this.shouldEnableLoginBtn()} onPress={() => this.onLoginBtnPressed(false)} />
                    <Text>- or -</Text>
                    <Button id="skipBtn" style={loginStyles.btns} title="skip" onPress={() => this.onLoginBtnPressed(true)} />
                </View>
            </View>
        );
    }

    onUNInput(usernameInput) {
       this.setState({hasValidUsername : isValidUsername(usernameInput.trim())});
       
        if (this.state.hasValidUsername) {
            this.setState({username : usernameInput});
        } else if(this.state.username !== undefined) {
            this.setState({username : undefined});
        }
    }

    onPasswordInput(passwordInput) {
        this.setState({hasValidPassword : isValidPassword(passwordInput)});
    }

    shouldEnableLoginBtn() {
        return this.state.hasValidPassword && this.state.hasValidUsername;
    }

    onLoginBtnPressed(isGuest) {
        const username = isGuest ? undefined : this.state.username.trim();
        userDataService.sendUserData(username, isGuest);
        this.props.navigation.navigate('MainRT', {isGuest: isGuest, username: username});
    }
}

const loginStyles = StyleSheet.create({
    loginWrapper: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
        justifyContent: 'center'
    },
    header: {
        color: "#616161",
        fontSize: 60
    },
    usernameWrapper: {
        marginTop: 20
    },
    passwordWrapper: {
        marginTop: 20
    },
    buttonsWrapper: {
        alignItems: "center",
        marginTop: 20
    },
    inputLabel: {
        color: "#616161",
        fontSize: 20
    },
    textInputs: {
        borderBottomWidth: 1,
        borderBottomColor: "#616161",
        paddingBottom: 0,
        width: 200
    },
    btns: {
        width: 100,
    },
    storefrontImg: {
        width: 50,
        height: 50
    }
});