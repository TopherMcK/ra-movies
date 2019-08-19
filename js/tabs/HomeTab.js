import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { searchService } from '../rest/SearchService';
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import HomeCell from '../shared/cells/HomeCell'
import { homeResultsObserver } from '../observers/HomeResultsObserver';
import BaseTab from './BaseTab';
import { titleService } from '../rest/TitleService';

export default class HomeTab extends BaseTab {

    constructor(props) {
        super(props);
        this.resultsArray = [];
        this.state = {
            isSearching: false,
            isLoading: true,
            hasValidSearchSuggestions: false,
            searchSuggestions: undefined,
            resultsRetrieved: 0,
            homeResults: []
        }
    }

    componentDidMount() {
        super.componentDidMount();
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
            this.resultsArray.push(value.results);
            this.setState({
                resultsRetrieved: this.state.resultsRetrieved + 1,
            })
            
             if(this.state.resultsRetrieved == 10) {
                this.setState({
                    hasValidSearchSuggestions: true,
                    isLoading: false,
                })
            }
        });
    }

    getContentView() {
        return this.showLoadingOrHomeList();
    }

    showLoadingOrHomeList() {
        if(this.state.hasValidSearchSuggestions) {
            return  <View>
                     <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                     <FlatList data={this.resultsArray} renderItem={({ item }) =>
                     <TouchableOpacity activeOpacity={1} onPressOut={() => this.sendUserToMovieDetail(item.Title)} >
                        <HomeCell item={this.SetupCell(item)} />
                     </TouchableOpacity>
                     }
                   />
              </View>
        } 
        else {
            return <Text>Getting Results...</Text>
        }
    }

    sendUserToMovieDetail(title) {
        this.getSelectedMovie(title);
        this.setState({
            isLoading: false,
            shouldShowDetailScreen: true
        })
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
            titleService.getTitleResult(movie.Title);
        }
    }
}