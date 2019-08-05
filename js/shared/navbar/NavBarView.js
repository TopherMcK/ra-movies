import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class NavBar extends React.Component {

    constructor() {
        super();

        this.state = {
            shouldShowSearch: false
        }
    }

    render() {
        return (this.getNavBarView());
    }

    getNavBarView() {
        return this.state.shouldShowSearch
            ? this.getSearchView()
            : this.getMainSearchView();
    }

    getSearchView() {
        return <View style={navBarStyles.navWrapper}>
        <TouchableOpacity style={navBarStyles.leftItem} id="navBarSearchReturnBtn" onPress={() => this.setState({shouldShowSearch: false})}>
            <Image source={require("../../../assets/arrow_back.png")} />
        </TouchableOpacity>

        <TextInput style={navBarStyles.searchTextInput} placeholder="Search Movies...." />

        <TouchableOpacity id="navBarSubmitSearchBtn" style={navBarStyles.rightItem} onPress={() => this.submitSearch()}>
            <Image source={require("../../../assets/search_icon.png")} />
        </TouchableOpacity>
    </View>;
    }

    getMainSearchView() {
        return <View style={navBarStyles.navWrapper}>
            <Image id="logo" source={require("../../../assets/logo.jpg")} />
            <Text id="username">Guest</Text>
            <TouchableOpacity id="navBarSearchBtn" onPress={() => this.setState({shouldShowSearch: true})}>
                <Image source={require("../../../assets/search_icon.png")} />
            </TouchableOpacity>
            <TouchableOpacity id="navBarMenuBtn">
                <Image source={require("../../../assets/menu_icon.png")} />
            </TouchableOpacity>
        </View>;
    }

    submitSearch(){
        // TODO
    }
}

const navBarStyles = StyleSheet.create({
    navWrapper: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    leftItem: {
        paddingLeft:10,
        flex: 1
    },
    searchTextInput: {
        flex: 4,
        minWidth:70
    },
    rightItem: {
        flex: 1,
    }
});