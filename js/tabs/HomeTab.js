import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { searchService } from '../rest/SearchService';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import HomeCell from '../shared/cells/HomeCell'
import BaseTab from './BaseTab';
import { titleService } from '../rest/TitleService';

export default class HomeTab extends BaseTab {
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
        searchService.getSearchSuggestionResults('Home').then((response) => {
            this.searchSuggestions = response
            if(response != null && response.Search != null && response.Search.length > 0) {
                this.retrieveHomeMovies(response.Search[0].Title);
            }
        });
    }

    componentWillUnmount() {
        if (homeSubscription!= null) {
            console.log("" + homeSubscription);
            homeSubscription.unsubscribe()
            homeSubscription = null
        }
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
        console.log("Send User to Movie Detail");
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

     retrieveHomeMovies(title) {
            titleService.getTitleResult(title).then((response) => {
                this.handleHomeMovieResponse(response);
            });
    }

    handleHomeMovieResponse(response) {
                this.resultsRetrieved++
                this.resultsArray.push(response)
            
                if(this.resultsRetrieved < 10 && this.searchSuggestions.Search.length > this.resultsRetrieved && this.searchSuggestions.Search[this.resultsRetrieved].Title != undefined) {
                    this.retrieveHomeMovies(this.searchSuggestions.Search[this.resultsRetrieved].Title);
                } else {
                    this.setState({
                        hasValidSearchSuggestions: true,
                        isLoading: false,
                    })
                }
    }
}