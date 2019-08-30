import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import HomeCell from '../shared/cells/HomeCell'
import BaseTab from './BaseTab';
import { titleService } from '../rest/TitleService';
import { trendingMovies } from '../utils/AppConstants';
import { NavigationEvents } from "react-navigation";
import { searchService } from '../rest/SearchService';

export default class TrendingTab extends BaseTab {
    homeSubscription = null
    resultsRetrieved = 0
    searchSuggestions = {}

    constructor(props) {
        super(props);
        this.resultsArray = [];
        this.state = {
            isSearching: false,
            isLoading: true,
            hasValidSearchSuggestions: false,
        }
    }

    componentDidMount() {
        super.componentDidMount();
        this.getRandomTrendingMovie();
    }

    componentWillUnmount() {
        if (homeSubscription != null) {
            homeSubscription.unsubscribe()
            homeSubscription = null
        }
    }

    getRandomTrendingMovie() {
        this.resultsArray.length = 0;
        this.resultsRetrieved = 0;
        this.setState({
            hasValidSearchSuggestions: false,
            isLoading: true,
        })
        
        randomTrending = trendingMovies[Math.floor(Math.random() * (trendingMovies.length - 1))];
        searchService.getSearchSuggestionResults(randomTrending).then((response) => {
            this.searchSuggestions = response;
            if (response != null && response.Search != null && response.Search.length > 0) {
                this.retrieveTrendingMovies(response.Search[0].Title);
            }
        });
    }

    getContentView() {
        return this.showLoadingOrHomeList();
    }

    showLoadingOrHomeList() {
        if (this.state.hasValidSearchSuggestions) {
            return <View>
                <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                <NavigationEvents
                    onWillFocus={payload => this.getRandomTrendingMovie()}
                />
                <FlatList data={this.resultsArray} keyExtractor={(item, index) => item + index} renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.sendUserToMovieDetail(item.Title)} >
                        <HomeCell item={this.SetupCell(item)} />
                    </TouchableOpacity>
                }
                />
            </View>
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
            imdbRating: item.imdbRating,
            rated: item.Rated,
            director: item.Director,
            cast: item.Actors,
        }
        return Cell;
    }

    retrieveTrendingMovies(title) {
        titleService.getTitleResult(title).then((response) => {
            this.handleTrendingMovieResponse(response);
        });
    }

    handleTrendingMovieResponse(response) {
        this.resultsRetrieved++
        this.resultsArray.push(response)

        if (this.resultsRetrieved < 10 && this.searchSuggestions.Search.length > this.resultsRetrieved && this.searchSuggestions.Search[this.resultsRetrieved].Title != undefined) {
            this.retrieveTrendingMovies(this.searchSuggestions.Search[this.resultsRetrieved].Title);
        } else {
            this.setState({
                hasValidSearchSuggestions: true,
                isLoading: false,
            })
        }
    }
}