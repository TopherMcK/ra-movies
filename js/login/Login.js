import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { isValidUsername, isValidPassword } from './LoginValidation';
import { userDataService } from '../observers/UserDataService';
import { globalStyle } from '../utils/GlobalStyles';
import { ButtonScaler } from '../utils/ButtonScaler';
import {auth} from 'react-native-firebase';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            hasValidUsername: false,
            pressedSkip: false,
            pressedSignin: false,
            hasUsernameError: false,
            hasPasswordError: false
        }
    }

    static navigationOptions = {
        header: null
    };

    async login(email, password, isGuest) {
        const username = isGuest ? undefined : this.state.username.trim();
        if (!isGuest) {
            try {
                const authResponse = await auth().signInWithEmailAndPassword(email, password);
                userDataService.sendUserData(username, isGuest);
                this.props.navigation.navigate('MainRT', {isGuest: isGuest, username: username});
            } catch (e) {
                alert("We had an error: " + e.message);
            }
        } else {
            this.props.navigation.navigate('MainRT', {isGuest: isGuest, username: username});
        }
    }

    async register(email, password) {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
        } catch (e) {
            console.log(e.message);
        }
    }

    render() {
        return (
            <View style={globalStyle.LoginContainer}>
                <View style={globalStyle.LoginSpacer}></View>
                <View id="loginWrapper" style={globalStyle.LoginView}>
                <View id="contentView" style={globalStyle.LoginContentView}>
                <Image id="storefrontImg" style={globalStyle.LoginLogo} source={require('../../assets/main_logo.png')} />
                <View id="usernameWrapper" style={globalStyle.LoginGroup}>
                    <View style={{flexDirection: "row"}} >
                        <Text id="usernameLabel" style={globalStyle.LoginLabel}>User Name</Text>
                        <Text style={globalStyle.InputWarning} id="usernameWarning">{this.getUsernameWarning()}</Text>
                    </View>
                    <TextInput id="usernameTextInput" style={globalStyle.InputField} onChangeText={(value) => this.onUNInput(value)}></TextInput>
                </View>
                <View id="passwordWrapper" style={globalStyle.LoginGroup}>
                    <View style={{flexDirection: "row"}} >
                        <Text id="passwordLabel" style={globalStyle.LoginLabel}>Password</Text>
                        <Text style={globalStyle.InputWarning} id="passwordWarning">{this.getPasswordWarning()}</Text>
                    </View>
                    <TextInput id="passwordTextInput" style={globalStyle.InputField} autoCompleteType="password" onChangeText={(value) => this.onPasswordInput(value)}></TextInput>
                </View>
                <View id="buttonsWrapper" style={globalStyle.LoginGroup}>
                    <ButtonScaler activeOpacity={1} id="signInBtn" style={this.state.pressedSignin ? globalStyle.LoginButtonPressed : globalStyle.LoginButton} disabled={!this.shouldEnableLoginBtn()} onPress={() => this.onLoginBtnPressed(false)}>
                        <Text style={!this.shouldEnableLoginBtn() ? globalStyle.LoginButtonTextDisabled : globalStyle.LoginButtonText}>Sign In</Text>
                    </ButtonScaler>
                    <Text style={globalStyle.LoginText}>- or -</Text>
                    <ButtonScaler activeOpacity={1} id="skipBtn" style={globalStyle.LoginButton} onPress={() => this.onLoginBtnPressed(true)}>
                        <Text style={globalStyle.LoginButtonText}>Skip</Text>
                     </ButtonScaler>
                </View>
                </View>
                </View>
                <View style={globalStyle.LoginSpacer}></View>
            </View>
        );
    }

    onUNInput(usernameInput) {
        const hasValidUsername = isValidUsername(usernameInput.trim());
        let hasUsernameError = false;

        if(!hasValidUsername) {
            if(usernameInput) {
                hasUsernameError = true;
            }
            if(this.state.username !== undefined) {
                usernameInput = undefined;
            }
        }

       this.setState({
           hasValidUsername: hasValidUsername,
           hasUsernameError: hasUsernameError,
           username: usernameInput
        });
    }

    onPasswordInput(passwordInput) {
        const hasValidPassword = isValidPassword(passwordInput);
        let hasPasswordError = (!hasValidPassword && passwordInput);
        this.setState({
            password: passwordInput,
            hasValidPassword: hasValidPassword,
            hasPasswordError: hasPasswordError
        });
    }

    shouldEnableLoginBtn() {
        return this.state.hasValidPassword && this.state.hasValidUsername;
    }

    onLoginBtnPressed(isGuest) {
        this.login(this.state.username, this.state.password, isGuest);
    }

    getUsernameWarning() {
        if(this.state.hasUsernameError) {
            return "Invalid Username"
        } else {
            return null
        }
    }
    getPasswordWarning() {
        if(this.state.hasPasswordError) {
            return "Invalid Password"
        } else {
            return null
        }
    }
}