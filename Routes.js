import Login from './js/login/Login';

import { StackNavigator } from 'react-navigation';
import Home from './js/home/Home';

const Routes = StackNavigator({
  LoginRT: {
    screen: Login
  },
  Home: {
      screen: Home
  }
},
  {
    initialRouteName: 'LoginRT'
  }
);

export default Routes