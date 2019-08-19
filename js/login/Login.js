import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { isValidUsername, isValidPassword } from './LoginValidation';
import { userDataService } from '../observers/UserDataService';
import { globalStyle } from '../utils/GlobalStyles';
import { ButtonScaler } from '../utils/ButtonScaler';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: undefined,
            hasValidUsername: false,
            pressedSkip: false,
            pressedSignin: false
        }
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
                    <Text id="usernameLabel" style={globalStyle.LoginLabel}>User Name</Text>
                    <TextInput id="usernameTextInput" style={globalStyle.InputField} onChangeText={(value) => this.onUNInput(value)}></TextInput>
                </View>
                <View id="passwordWrapper" style={globalStyle.LoginGroup}>
                    <Text id="passwordLabel" style={globalStyle.LoginLabel}>Password</Text>
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