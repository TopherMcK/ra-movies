import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import NavBar from '../shared/navbar/NavBarView';

export default class Home extends React.Component {
    static navigationOptions = {
        headerTitle: <NavBar />,
        headerLeft: null
    };

    render() {
        return (
            <Text>Need to change this component's name</Text>
        );
    }
}