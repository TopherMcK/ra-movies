import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';

import { FlatList, Text, View } from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver'
import  { globalStyle } from '../utils/GlobalStyles';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper';
import { navigationObserver } from '../observers/NavigationObserver'

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
                { activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading) }
                { this.getSearchResultsView() }
            </View>;
        } else {
            return <BottomTabNavigation />;
        }
    }

    getSearchResultsView() {
        if(this.state.hasValidSearchSuggestions) {
            console.log("Search Suggestions: " + JSON.stringify(this.state.searchSuggestions));
            return  <FlatList
            dataSource={this.state.searchSuggestions}
            renderSeparator= {this.ListViewItemSeparator}
            renderRow={(rowData) =>
           <View style={{flex:1, flexDirection: 'column'}} >
             <Text style={styles.textViewContainer} >{rowData.title}</Text>
           </View>
            }
          />
        } else {
            return <Text>No results found...</Text>
        }
    }
}