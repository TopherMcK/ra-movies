import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class HamburgerMenuView extends React.Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;

        this.state = {
            isGuest: navigation.getParam('isGuest', true),
            username: navigation.getParam('username', 'Guest')
        }
    }

    render() {
        return (
            <View>
            <View>
                <Text>{this.state.username}</Text>
            </View>
                { this.getSignInOrLogoutView() }
            </View>
        );
    }

    getSignInOrLogoutView(){
        if(this.state.isGuest) {
            return <TouchableOpacity><Text>Sign In</Text></TouchableOpacity>
        } else {
            return <TouchableOpacity><Text>Sign In</Text></TouchableOpacity>
        }
    }
}

const hamburgerStyles = StyleSheet.create({
});