import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { userDataService } from '../observers/UserDataService';
import { globalStyle } from '../utils/GlobalStyles';
import { ButtonScaler } from '../utils/ButtonScaler';
import firebase from 'react-native-firebase';

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSignUp = () => {
        console.log("Handle Sign up");
        const { email, password } = this.state
        console.log(email+"/"+password);
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Routes'))
            .catch(error => this.setState({ errorMessage: error.message }))
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
                this.props.navigation.navigate('MainRT', { isGuest: isGuest, username: username });
            } catch (e) {
                alert(e.message);
            }
        } else {
            this.props.navigation.navigate('MainRT', { isGuest: isGuest, username: username });
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
                            <Text style={globalStyle.LoginLabel}>Sign Up</Text>
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
                             <ButtonScaler activeOpacity={1} id="signupBtn" style={this.disabled ? globalStyle.LoginButtonPressed : globalStyle.LoginButton} disabled={false} onPress={this.handleSignUp}>
                                 <Text style={globalStyle.LoginButtonText}>Sign Up</Text>
                             </ButtonScaler>
                         </View>
                            <View id="buttonsWrapper" style={globalStyle.LoginGroup}>
                             <ButtonScaler activeOpacity={1} style={globalStyle.LoginButton} onPress={() => this.props.navigation.navigate('Login')}>
                                 <Text style={globalStyle.LoginButtonText}>Already have an account? Login</Text>
                             </ButtonScaler>
                         </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}