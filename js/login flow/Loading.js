import React from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { globalStyle } from '../utils/GlobalStyles';
import firebase from 'react-native-firebase';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'DrawerNav' : 'SignUp')
        })
    }

    render() {
        return (
            <View style={globalStyle.LoginContainer}>
                <View id="loginWrapper" style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Image id="storefrontImg" source={require('../../assets/main_logo.png')} />
                <ActivityIndicator size="large" />  
                </View>
            </View>
        );
    }
}