import React from 'react';
import { Text, View } from 'react-native';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper';
import DetailView from '../detail/DetailView';
import { titleService } from '../rest/TitleService';
import { contentLoadingObserver } from '../observers/ContentLoadingObserver';

export default class BaseTab extends React.Component {
    static shouldShow = false

    constructor() {
        super();
        this.state = {
            preloadedData: false,
            isLoading: false,
            shouldShowDetailScreen: false,
            detailMovie: {},
        }
    }

    componentDidMount() {
        contentLoadingObserver.getContentLoadingCheck().subscribe((shouldShowDetailScreen) => {
            this.setState({
                preloadedData: false,
                shouldShowDetailScreen: false
            });
        });
    }    

    render() {
        return (
            <View>
                {activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}
                {this.showDetailOrContentView()}
            </View>
        );
    }

    getTabContentView() {
        return <Text>You must override getTabContentView from BaseTab!</Text>;
    }

    showDetailOrContentView() {
        if(this.state.preloadedData) {
            return this.getDetailView()
        } else {
            return this.getContentView()
        }
    }

    getDetailView() {
        return <DetailView detailMovie={this.state.detailMovie}/>
    }

    getContentView() {
        return null
    }

    getSelectedMovie(title) {
        titleService.getTitleResult(title).then((response) => {
            if(this.state.shouldShowDetailScreen) {
                this.setState({
                    detailMovie: response,
                    isLoading: false,
                    preloadedData: true,
                })
            }
        });
    }
}