import { DrawerNavigator, SwitchNavigator } from 'react-navigation';
import HamburgerMenuView from './js/shared/hamburger_menu/HamburgerMenuView';
import React from 'react'
import { Image, TouchableOpacity, Dimensions } from 'react-native'
import Loading from './js/login flow/Loading'
import SignUp from './js/login flow/Signup'
import Login from './js/login flow/Login'
import Routes from './Routes'
import  { globalStyle } from './js/utils/GlobalStyles';

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

function getMenuButton(navigation) {
  return <TouchableOpacity id="navBarMenuBtn" onPress={() => navigation.openDrawer()}>
  <Image source={require("./assets/menu_icon.png")} style={globalStyle.NavBurger} />
</TouchableOpacity>
}

console.disableYellowBox = true;
export default App
