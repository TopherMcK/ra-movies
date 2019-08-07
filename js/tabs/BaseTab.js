import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default class BaseTab extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    render() {
        return (
            <View>
                {this.checkToShowActivityIndicator()}
                {this.getTabContentView()}
            </View>
        );
    }

    getTabContentView(){
        return <Text>You mest override getTabContentView from BaseTab!</Text>;
    }

    checkToShowActivityIndicator() {
        if (this.state.isLoading) {
            return <ActivityIndicator></ActivityIndicator>;
        } else {
            return null;
        }
    }
}