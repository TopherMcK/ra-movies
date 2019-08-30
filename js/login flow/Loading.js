import React from 'react';
import { Image, View, ActivityIndicator } from 'react-native';
import { globalStyle } from '../utils/GlobalStyles';
import firebase from 'react-native-firebase';
import { updateHistoryArray } from '../utils/AppConstants';

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log(">>>>>> LOGIN: " + JSON.stringify(user));
            if (user) {
                this.goToMainView(user.uid);
            } else {
                console.log(">>>>>>>> GO TO SIGN UP");
                this.goToSignUp();
            }
        })
    }

    goToMainView(currentUser) {
        var historyRef = firebase.database().ref('users/' + currentUser + '/history');
        historyRef.on('value', function(snapshot) {
            updateHistoryArray(snapshot.val());
        })        
        this.props.navigation.navigate('DrawerNav');
    }

    goToSignUp() {
        this.props.navigation.navigate('SignUp');
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