import React from 'react';

import Login from './js/login flow/Login';

import { StackNavigator } from 'react-navigation';
import { Image, TouchableOpacity } from 'react-native';
import NavBar from './js/shared/navbar/NavBarView';
import MainView from './js/main/MainView';
import { globalStyle } from './js/utils/GlobalStyles';
import DetailView from './js/detail/DetailView';

const Routes = StackNavigator({
  MainRT: {
    screen: MainView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <NavBar navigation={navigation} />,
      headerLeft: null,
      headerRight: (
      getMenuButton(navigation)
      )
    }),
    headerStyle: { paddingRight: 10, paddingLeft: 15 }
  },
  DetailViewRT: {
    screen: DetailView,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <NavBar navigation={navigation} />,
      headerLeft: null,
      headerRight: (
      getMenuButton(navigation)
      )
    }),
    headerStyle: { paddingRight: 10, paddingLeft: 15 }
  }
},
  {
    initialRouteName: 'MainRT'
  }
);

function getMenuButton(navigation) {
  return <TouchableOpacity id="navBarMenuBtn" onPress={() => navigation.openDrawer()}>
  <Image source={require("./assets/menu_icon.png")} style={globalStyle.NavBurger} />
</TouchableOpacity>
}

export default Routes