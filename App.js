import { DrawerNavigator, SwitchNavigator } from 'react-navigation';
import HamburgerMenuView from './js/shared/hamburger_menu/HamburgerMenuView';
import React from 'react'
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import Loading from './js/login flow/Loading'
import SignUp from './js/login flow/Signup'
import Login from './js/login flow/Login'
import Routes from './Routes'
import  { globalStyle } from './js/utils/GlobalStyles';
import firebase from 'react-native-firebase';

const DrawerNav = DrawerNavigator({
  Item1: {
      screen: Routes,
    }
  },
  {
    contentComponent: HamburgerMenuView,
    drawerType: 'slide',
    drawerWidth: Dimensions.get('window').width - 120,
});

const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    DrawerNav,
  },
  {
    initialRouteName: 'Loading'
  }
)

const config = {
  apiKey: "AIzaSyBn3f5PYPFl0QReWQiFhRypuTiCMCQSTWY",//"AIzaSyC2QIsoTKjAsmi0Pdr6iVmdK7c-6_-OLXU",
  authDomain: "ramovies-52ad8.firebaseapp.com",
  databaseURL: "https://ramovies-52ad8.firebaseio.com",
  projectId: "ramovies-52ad8",
  storageBucket: "",
  messagingSenderId: "925276240313",
};

function getMenuButton(navigation) {
  return <TouchableOpacity id="navBarMenuBtn" onPress={() => navigation.openDrawer()}>
  <Image source={require("./assets/menu_icon.png")} style={globalStyle.NavBurger} />
</TouchableOpacity>
}

console.disableYellowBox = true;
firebase.config = config;
export default App
