import React from 'react';
import { Text, View } from 'react-native';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper';
import DetailView from '../detail/DetailView';
import { homeResultsObserver } from '../observers/HomeResultsObserver';
import { titleService } from '../rest/TitleService';

export default class BaseTab extends React.Component {

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
        homeResultsObserver.getHomeResults().subscribe((value) => {
            if(this.state.shouldShowDetailScreen) {
                this.setState({
                    detailMovie: value.results,
                    isLoading: false,
                    preloadedData: true,
                })
            }
        })
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
                {this.showDetailOrContentView()}
            </View>
        );
    }

    getTabContentView() {
        return <Text>You mest override getTabContentView from BaseTab!</Text>;
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
        titleService.getTitleResult(title);
    }
}