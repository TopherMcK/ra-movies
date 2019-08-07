import React from 'react';
import BottomTabNavigation from '../../BottTabNavigation';
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver'

export default class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            isSearching: false,
            hasValidSearchSuggestions: false,
            searchSuggestions: undefined
        }
    }

    componentDidMount() {
        searchSuggestionObserver.getSearchSuggestionResults().subscribe((value) => {
            this.setState({
                isLoading: false,
                isSearching: true,
                hasValidSearchSuggestions: value.hasValidResponse,
                searchSuggestions: value.results
            });
        });

        contentLoadingObserver.getContentLoadingCheck().subscribe((isLoading) => {
            this.setState({
                isLoading: isLoading
            })
        });
    }

    setupSubscriptions() {
        
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
        // console.log("Has Valid Search Suggestions? : " + this.state.hasValidSearchSuggestions);
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
            // return <Text>Results Found</Text>
        } else {
            return <Text>No results found...</Text>
        }
    }
}