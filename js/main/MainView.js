import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';
import { Text} from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import  { globalStyle } from '../utils/GlobalStyles';

export default class MainView extends React.Component {
    static navigationOptions = {
        headerStyle: globalStyle.NavBackground
     }

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
            this.getMainView()
        );
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