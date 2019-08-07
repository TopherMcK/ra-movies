import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';
import { ActivityIndicator, Text, View } from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';

export default class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            isSearching: false,
            hasValidSearchSuggestions: false,
            searchSuggestions: []
        }
    }

    componentDidMount() {
        searchSuggestionObserver.getSearchSuggestionResults().subscribe((hasValidSearchSuggestions, suggestionResults) => {
                        this.setState({
                            isSearching: true,
                            hasValidSearchSuggestions: hasValidSearchSuggestions,
                            searchSuggestions: suggestionResults
                        }
        
                    );
                });
    }

    render() {
        return (
            <View>
                {this.checkToShowActivityIndicator()}
                {this.getMainView()}
            </View>
        );
    }

    checkToShowActivityIndicator() {
        if (this.state.isLoading) {
            return <ActivityIndicator></ActivityIndicator>;
        } else {
            return null;
        }
    }

    getMainView() {
        if (this.state.isSearching) {
            return this.getSearchResultsView();
        } else {
            return <BottomTabNavigation />
        }
    }

    getSearchResultsView() {
        if(this.state.hasValidSearchSuggestions) {
            return <Text>Results found.</Text>
        } else {
            return <Text>No results found...</Text>
        }
    }
}