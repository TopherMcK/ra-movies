import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { defaultUsername } from '../../utils/AppConstants';
import { globalStyle } from '../../utils/GlobalStyles';
import { ButtonScaler } from '../../utils/ButtonScaler';
import firebase from 'react-native-firebase'

export default class HamburgerMenuView extends React.Component {
    state = { currentUser: null };
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            isGuest: true,
            pressedSignin: false,
        }
    }

    handleLogout = () => {
        const { email, password } = this.state;
        firebase
        .auth()
        .signOut()
        .then(() => this.props.navigation.navigate('Loading'))
        .catch(error => this.setState({ errorMessage: error.message}))
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        if (currentUser.email != null) {
            this.setState({ 
                username: currentUser.email,
                isGuest: false,
            })
        }
    }

    render() {
        return (
            <View>
                <View style={globalStyle.BurgerHeader}>
                    <Text style={globalStyle.BurgerWelcome}>Welcome back,</Text>
                    <Text id="usernameTxt" style={globalStyle.BurgerUserName} >{this.getUsername()}</Text>
                </View>
                <View style={hamburgerStyles.menuListWrapper}>
                    <ButtonScaler activeOpacity={1} style={this.state.pressedSignin ? globalStyle.LoginButtonPressed : globalStyle.LoginButton} id="signoutBtn" onPress={this.handleLogout}>
                        <Text style={globalStyle.LoginButtonText}>{this.getSignInOrLogoutText()}</Text>
                    </ButtonScaler>
                </View>
            </View>
        );
    }

    getUsername() {
        return this.state.username === undefined ? defaultUsername : this.state.username;
    }

    getSignInOrLogoutText() {
        if (this.state.isGuest) {
            return 'Sign In';
        } else {
            return 'Log Out';
        }
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