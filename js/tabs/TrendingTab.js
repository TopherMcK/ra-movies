import React from 'react';
import { Text } from 'react-native';
import BaseTab from './BaseTab';

export default class TrendingTab extends BaseTab {
    constructor(){
        super();
    }

    getTabContentView(){
        return <Text>Trending Tab is now inheriting from base</Text>;
    }
}