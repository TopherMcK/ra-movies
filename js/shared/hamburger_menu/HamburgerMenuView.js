import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { userDataService } from '../../observers/UserDataService';
import { defaultUsername } from '../../utils/AppConstants';
import { globalStyle } from '../../utils/GlobalStyles';
import { ButtonScaler } from '../../utils/ButtonScaler';

export default class HamburgerMenuView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: undefined,
            isGuest: true,
            pressedSignin: false,
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
                <View style={globalStyle.BurgerHeader}>
                    <Text style={globalStyle.BurgerWelcome}>Welcome back,</Text>
                    <Text id="usernameTxt" style={globalStyle.BurgerUserName} >{this.getUsername()}</Text>
                </View>
                <View style={hamburgerStyles.menuListWrapper}>
                    <ButtonScaler activeOpacity={1} style={this.state.pressedSignin ? globalStyle.LoginButtonPressed : globalStyle.LoginButton} id="signoutBtn" onPress={() => this.logoutUser()}>
                        <Text style={globalStyle.LoginButtonText}>{ this.getSignInOrLogoutText() }</Text>
                    </ButtonScaler>
                </View>
            </View>
        );
    }

    getUsername() {
        return this.state.username === undefined ? defaultUsername : this.state.username;
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
        fontSize: 20,
    },
    menuListWrapper: {
        padding: 40,
    },
    menuItemView: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});