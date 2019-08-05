import React from 'react';
import Routes from './Routes'
import Login from './js/login/Login'

// export default createBottomTabNavigator({
//   LoginRT: {
//     screen: Login
//   },
//   Home: {
//     screen: Home
//   }
// }, {
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     }
//   }
// );



import { createBottomTabNavigator } from 'react-navigation'


// const TabNavigator = createBottomTabNavigator({
//     LoginTab: {screen: Login}
// });

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}