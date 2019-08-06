import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class HamburgerMenuView extends React.Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props.navigation;

        this.state = {
            isGuest: navigation === undefined || navigation === null ? true : navigation.getParam('isGuest', true),
            username: navigation === undefined || navigation === null ? "Guest" : navigation.getParam('username', 'Guest')
         }
    }

    render() {

        return (
            <View>
                <View style={hamburgerStyles.headerView}>
                    <Text style={hamburgerStyles.headerText} >{this.state.username}</Text>
                </View>
                <View style={hamburgerStyles.menuListWrapper}>
                    <View style={hamburgerStyles.menuItemView}>
                    <TouchableOpacity onPress={() => this.logoutUser()}><Text>{ this.getSignInOrLogoutText() }</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        );
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