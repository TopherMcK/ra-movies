import React from 'react';

import Login from './js/login/Login';

import { StackNavigator } from 'react-navigation';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import NavBar from './js/shared/navbar/NavBarView';
import MainView from './js/main/MainView';

const Routes = StackNavigator({
  LoginRT: {
    screen: Login
  },
  Home: {
    screen: MainView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <NavBar navigation={navigation} />,
      headerLeft: null,
      headerRight: (
      <TouchableOpacity id="navBarMenuBtn" onPress={() => navigation.navigate("DrawerOpen")}>
        <Image source={require("./assets/menu_icon.png")} />
      </TouchableOpacity>)
    }),
    headerStyle: { paddingRight: 10, paddingLeft: 15 }
  }
},
  {
    initialRouteName: 'LoginRT'
  }
);

export default Routes