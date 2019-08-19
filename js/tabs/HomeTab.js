import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { searchService } from '../rest/SearchService';
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import HomeCell from '../shared/cells/HomeCell'
import { homeResultsObserver } from '../observers/HomeResultsObserver';
import { homeService } from '../rest/HomeService';

export default class HomeTab extends React.Component {

    constructor() {
        super();
        this.resultsArray = [];
        this.state = {
            isSearching: false,
            isLoading: true,
            hasValidSearchSuggestions: false,
            searchSuggestions: undefined,
            resultsRetrieved: 0,
            homeResults: [],
        
        }
    }

    componentDidMount() {
        this.setupSubscriptions();
        searchService.getSearchSuggestionResults('Home');
    }

    setupSubscriptions() {

        searchSuggestionObserver.getSearchSuggestionResults().subscribe((value) => {
            this.setState({
                isSearching: true,
                isLoading: false,
                searchSuggestions: value.results
            });
            this.retrieveHomeMovies();
        });

        homeResultsObserver.getHomeResults().subscribe((value) => {
            const currentResults = this.state.resultsRetrieved;
            currentResults[0] = value;
            this.resultsArray.push(value.results);
            // this.state.resultsRetrieved[this.state.resultsRetrieved] = value
            this.setState({
                resultsRetrieved: this.state.resultsRetrieved + 1,
                homeResults: [],
            })
            // console.log("@@@@ : " + resultsArray);
            
            if(this.state.resultsRetrieved < 2) {
            //     const numberRetrieved = this.state.resultsRetrieved
            //     // const currentResults = this.homeResults
            //     // currentResults.a
            //     // console.log("@@@@@@@@@@@@ Current Results: " + currentResults);
            //     // currentResults[numberRetrieved] = value
            } else {
            //     // this.setState({
            //     //     hasValidSearchSuggestions: true
            //     // });
                this.setState({
                    hasValidSearchSuggestions: true
                })
            }
        });
    }

    render() {
        return (
            this.showLoadingOrHomeList()
        );
    }

    

    showLoadingOrHomeList() {
        if(this.state.hasValidSearchSuggestions) {
            return  <View>
                     <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                     <FlatList data={this.resultsArray} renderItem={({ item }) =>
                        <HomeCell item={this.SetupCell(item)} />
                     }
                   />
              </View>
        } 
        else {
            return <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
        }
    }

    SetupCell(item) {
        const Cell = {
            imageSrc: {
                uri: item.Poster
            },
            title: item.Title,
            year: item.Year,
            imdbRating: item.Ratings[0].Value.split("/")[0] / 10,
            rated: item.Rated,
            director: item.Director,
            cast: item.Actors,
        }
        return Cell;
    }

    retrieveHomeMovies() {
        for(movie of this.state.searchSuggestions.Search) {
            homeService.getSearchSuggestionResults(movie.Title);
        }
    }
}