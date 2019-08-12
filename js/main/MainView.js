import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';

import { FlatList, Text, View } from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver'
import  { globalStyle } from '../utils/GlobalStyles';
import { navigationObserver } from '../observers/NavigationObserver'
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'

export default class MainView extends React.Component {
    static navigationOptions = {
        headerStyle: globalStyle.NavBackground
     }

    constructor() {
        super();
        this.state = {
            isSearching: false,
            isLoading: false,
            hasValidSearchSuggestions: false,
            searchSuggestions: undefined
        }
    }

    componentDidMount() {
        this.setupSubscriptions();
    }

    setupSubscriptions() {
        contentLoadingObserver.getContentLoadingCheck().subscribe((isLoading) => {
            this.setState({
                isLoading: isLoading
            })
        });

        navigationObserver.getDestination().subscribe((destination) => {
            this.setState({
                isSearching: false
            })
        });

        searchSuggestionObserver.getSearchSuggestionResults().subscribe((value) => {
            this.setState({
                isSearching: true,
                isLoading: false,
                hasValidSearchSuggestions: value.hasValidResponse,
                searchSuggestions: value.results
            });
            contentLoadingObserver.sendIsContentLoading(false);
        });
    }

    render() {
        return (
            this.getMainView()
        );
    }

    getMainView() {
        if (this.state.isSearching) {
            return <View>
                { this.getSearchResultsView() }
            </View>;
        } else {
            return <BottomTabNavigation/>;
        }
    }

    getSearchResultsView() {
        if(this.state.hasValidSearchSuggestions) {
            const searchResult = this.state.searchSuggestions
            console.log("Search Suggestions: " + JSON.stringify(this.state.searchSuggestions));

            return <View>
            <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
            <FlatList data={searchResult.Search} renderItem={({ item }) =>
              <Text >{item.Title}</Text>
            }
          />
          </View>
        } 
        else {
            return <View>
            <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                <Text>No results found...</Text>
                </View>;
        }
    }
}