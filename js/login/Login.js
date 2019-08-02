import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return(
            <View id="loginWrapper">
                <Text id="loginTitle">Sign In</Text>
                <View id="usernameWrapper">
                    <Text id="usernameLabel">User Name</Text>
                    <TextInput id="usernameTextInput"></TextInput>
                </View>
                <View id="passwordWrapper">
                    <Text id="passwordLabel">Password</Text>
                    <TextInput id="passwordTextInput"></TextInput>
                </View>
                <View id ="buttonsWrapper">
                    <Button id="signInBtn" title="signin" />
                    <Text>- or -</Text>
                    <Button id="skipBtn" title="skip" username="Guest" onPress={()=> this.props.navigation.navigate('Home')}/>
                </View>
            </View>
        );
    }
}

const loginStyles = StyleSheet.create({
    loginWrapper: {
        flex: 1,
        alignItems: "center"
    }
});