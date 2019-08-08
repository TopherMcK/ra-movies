import React from 'react';
import { Text, View } from 'react-native';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver'
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper';

export default class BaseTab extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        contentLoadingObserver.getContentLoadingCheck().subscribe((isLoading) => {
            this.setState({
                isLoading: isLoading
            })
        });
    }

    render() {
        return (
            <View>
                {activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}
                {this.getTabContentView()}
            </View>
        );
    }

    getTabContentView(){
        return <Text>You mest override getTabContentView from BaseTab!</Text>;
    }
}