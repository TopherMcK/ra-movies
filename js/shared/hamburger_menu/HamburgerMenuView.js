import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { userDataService } from '../../observers/UserDataService';

export default class HamburgerMenuView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            isGuest: true
         }
    }

    componentDidMount() {
        this.subscription = userDataService.getUserData().subscribe(user => {
                this.setState({
                    username: user.username,
                    isGuest: user.isGuest
                }
            );
        });
    }

    render() {

        return (
            <View>
                <View style={hamburgerStyles.headerView}>
                    <Text id="usernameTxt" style={hamburgerStyles.headerText} >{this.getUsername()}</Text>
                </View>
                <View style={hamburgerStyles.menuListWrapper}>
                    <View style={hamburgerStyles.menuItemView}>
                    <TouchableOpacity id="signoutBtn" onPress={() => this.logoutUser()}><Text>{ this.getSignInOrLogoutText() }</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    getUsername() {
        return this.state.username === undefined ? 'Guest' : this.state.username;
    }

    getSignInOrLogoutText(){
        if(this.state.isGuest) {
            return 'Sign In';
        } else {
            return 'Log Out';
        }
    }

    logoutUser() {
        this.goToLogin();
    }

    goToLogin() {
        this.props.navigation.navigate('LoginRT');
    }
}

const hamburgerStyles = StyleSheet.create({
    headerView: {
        padding: 40,
        backgroundColor: '#0336ff',
        borderBottomWidth: 2,
        borderBottomColor: '#FDD835',
        alignItems: "center"
    },
    headerText: {
        color: '#fff',
        fontSize: 20
    },
    menuListWrapper: {
        padding: 40
    },
    menuItemView: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});