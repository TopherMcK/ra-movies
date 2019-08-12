import React from 'react';
import { createBottomTabNavigator} from 'react-navigation';

import HomeTab from './js/tabs/HomeTab';
import TrendingTab from './js/tabs/TrendingTab';
import FavoritesTab from './js/tabs/FavoritesTab';
import FollowedTab from './js/tabs/FollowedTab';
import HistoryTab from './js/tabs/HistoryTab';

import { Image } from 'react-native'
import { blockbusterYellow, blockbusterBlue } from './js/utils/AppConstants';

const BottomTabNavigation = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab,
        navigationOptions: {
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => {
                const highlight = focused ? blockbusterYellow : 'white';
                return (<Image source={require("./assets/home.png")} style={{tintColor: highlight}} />)
            },
            tabBarOptions: {showIcon: true, showLabel: false, style: {
                backgroundColor: blockbusterBlue,
                borderTopColor: blockbusterYellow,
                borderTopWidth: 5,
            }},
        }
    },
    TrendingTab: {
        screen: TrendingTab,
        navigationOptions: {
            tabBarLabel: "Trending",
            tabBarIcon: ({ focused }) => {
                const highlight = focused ? blockbusterYellow : 'white';
                return (<Image source={require("./assets/trending.png")} style={{tintColor: highlight}} />)
            },
            tabBarOptions: {showIcon: true, showLabel: false, style: {
                backgroundColor: blockbusterBlue,
                borderTopColor: blockbusterYellow,
                borderTopWidth: 5,
            }},
        }
    },
    FavoritesTab: {
        screen: FavoritesTab,
        navigationOptions: {
            tabBarLabel: "Dumpster",
            tabBarIcon: ({ focused }) => {
                const highlight = focused ? blockbusterYellow : 'white';
                return (<Image source={require("./assets/dumpster.png")} style={{tintColor: highlight}} />)
            },
            tabBarOptions: {showIcon: true, showLabel: false, style: {
                backgroundColor: blockbusterBlue,
                borderTopColor: blockbusterYellow,
                borderTopWidth: 5,
            }},
        }
    },
    FollowedTab: {
        screen: FollowedTab,
        navigationOptions: {
            tabBarLabel: "Follow",
            tabBarIcon: ({ focused }) => {
                const highlight = focused ? blockbusterYellow : 'white';
                return (<Image source={require("./assets/followed.png")} style={{tintColor: highlight}} />)
            },
            tabBarOptions: {showIcon: true, showLabel: false, style: {
                backgroundColor: blockbusterBlue,
                borderTopColor: blockbusterYellow,
                borderTopWidth: 5,
            }},
        }
    },
    HistoryTab: {
        screen: HistoryTab,
        navigationOptions: {
            tabBarLabel: "History",
            tabBarIcon: ({ focused }) => {
                const highlight = focused ? blockbusterYellow : 'white';
                return (<Image source={require("./assets/history.png")} style={{tintColor: highlight}} />)
            },
            tabBarOptions: {showIcon: true, showLabel: false, style: {
                backgroundColor: blockbusterBlue,
                borderTopColor: blockbusterYellow,
                borderTopWidth: 5,
            }},
        }
    }
}, {
    initialRoute: 'HomeTab'
});

export default BottomTabNavigation;