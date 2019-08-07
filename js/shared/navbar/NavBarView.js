import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { defaultUsername } from '../../utils/AppConstants';
import { searchService } from '../../rest/SearchService';
import  { globalStyle } from '../../utils/GlobalStyles';
import { userDataUtil } from '../../utils/UserDataUtil';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);

        const { navigation } = this.props;

        this.state = {
            shouldShowSearch: false,
            shouldShowMenu: false,
            isGuest: navigation.getParam('isGuest', true),
            username: navigation.getParam('username', 'Guest')
        }
    }

    render() {
        return (
            this.getNavBarView()
            );
    }

    getNavBarView() {
        if(this.state.shouldShowSearch) {
            return this.getSearchView();
        } else if(this.state.shouldShowMenu) {
            return this.getMenuView();
        } else {
            return this.getMainNavbarView();

        }
    }

    getSearchView() {
        return <View style={navBarStyles.navWrapper}>
        <TouchableOpacity style={navBarStyles.leftItem} id="navBarSearchReturnBtn" onPress={() => this.setState({shouldShowSearch: false})}>
            <Image source={require("../../../assets/arrow_back.png")} style={globalStyle.NavBackButton} />
        </TouchableOpacity>

        <TextInput style={navBarStyles.searchTextInput} placeholder="Search Movies...." onChangeText={(value) => this.getSearchSuggestion(value)} />

        <TouchableOpacity id="navBarSubmitSearchBtn" style={navBarStyles.rightItem} onPress={() => this.submitSearch()}>
            <Image source={require("../../../assets/search_icon.png")} style={globalStyle.NavItem} />
        </TouchableOpacity>
    </View>;
    }

    getMainNavbarView() {
        return <View style={navBarStyles.navWrapper}>
            <Image id="logo" style={globalStyle.NavLogo} source={require("../../../assets/logo.png")} style={globalStyle.NavLogo} />
            <Text id="username" style={globalStyle.NavText} >{userDataUtil.getDisplayUsername(this.getUsername())}</Text>
            <TouchableOpacity id="navBarSearchBtn" onPress={() => this.setState({shouldShowSearch: true})}>
                <Image source={require("../../../assets/search_icon.png")} style={globalStyle.NavItem} />
            </TouchableOpacity>
        </View>;
    }

    getUsername() {
        return this.state.username === undefined ? defaultUsername : this.state.username;
    }

    getSearchSuggestion(value){
        searchService.getSearchSuggestionResults(value);
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
        minWidth:70,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    rightItem: {
        flex: 1,
    }
});