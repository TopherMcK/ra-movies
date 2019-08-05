import React from 'react';
import { createBottomTabNavigator} from 'react-navigation';

import HomeTab from './js/tabs/HomeTab';
import TrendingTab from './js/tabs/TrendingTab';
import FavoritesTab from './js/tabs/FavoritesTab';
import FollowedTab from './js/tabs/FollowedTab';
import HistoryTab from './js/tabs/HistoryTab';


const BottomTabNavigation = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    TrendingTab: {
        screen: TrendingTab
    },
    FavoritesTab: {
        screen: FavoritesTab
    },
    FollowedTab: {
        screen: FollowedTab
    },
    HistoryTab: {
        screen: HistoryTab
    }
}, {
    initialRoute: 'HomeTab'
});

export default BottomTabNavigation;