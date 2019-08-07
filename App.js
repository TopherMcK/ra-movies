import React from 'react';
import { Dimensions } from 'react-native';
import Routes from './Routes'
import { DrawerNavigator } from 'react-navigation';
import HamburgerMenuView from './js/shared/hamburger_menu/HamburgerMenuView';

const DrawerNav = DrawerNavigator({
  Item1: {
      screen: Routes,
    }
  }, {
    contentComponent: HamburgerMenuView,
    drawerWidth: Dimensions.get('window').width - 120,  
});

export default class App extends React.Component {
  render() {
    return (
      <DrawerNav />
    );
  }
}

console.disableYellowBox = true;