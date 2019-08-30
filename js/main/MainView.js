import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';
import { FlatList, Text, View } from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { contentLoadingObserver } from '../observers/ContentLoadingObserver'
import { globalStyle } from '../utils/GlobalStyles';
import { navigationObserver } from '../observers/NavigationObserver'
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import SearchResultCell from '../shared/cells/SearchResultCell'

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
            // todo
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
                {this.getSearchResultsView()}
            </View>;
        } else {
            return <BottomTabNavigation />;
        }
    }

    getSearchResultsView() {
        if (this.state.hasValidSearchSuggestions) {
            const searchResult = this.state.searchSuggestions
            return <View>
                <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                <FlatList data={searchResult.Search} renderItem={({ item }) =>
                    <SearchResultCell item={this.SetupCell(item)} />
                } />
            </View>
        }
        else {
            return <View>
                <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
            </View>;
        }
    }

    SetupCell(item) {
        const Cell = {
            imageSrc: {
                uri: item.Poster
            },
            title: item.Title,
            year: item.Year
        }
        return Cell;
    }
}