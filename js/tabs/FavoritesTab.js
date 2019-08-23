import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import HomeCell from '../shared/cells/HomeCell'
import BaseTab from './BaseTab';
import { titleService } from '../rest/TitleService';
import { dumpsterMovies } from '../utils/AppConstants';

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
        for (let movie of dumpsterMovies) {
            this.retrieveDumpsterMovies(movie);
        }
    }

    componentWillUnmount() {
        if (homeSubscription!= null) {
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
                     <TouchableOpacity activeOpacity={1} onPress={() => this.sendUserToMovieDetail(item.Title)} >
                        <HomeCell item={this.SetupCell(item)} />
                        {/* <Text>{item.Title}</Text> */}
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
            imdbRating: item.imdbRating,// defaultRating[0].Value,
            rated: item.Rated,
            director: item.Director,
            cast: item.Actors,
        }
        return Cell;
    }

    retrieveDumpsterMovies(title) {
        titleService.getTitleResult(title).then((response) => {
            this.handleDumpsterMovieResponse(response);
        });
}

    handleDumpsterMovieResponse(response) {
                this.resultsArray.push(response)
                if(this.resultsRetrieved < 20 && this.searchSuggestions.length > this.resultsRetrieved && this.searchSuggestions[this.resultsRetrieved].Title != undefined) {

                } else {
                    this.setState({
                        hasValidSearchSuggestions: true,
                        isLoading: false,
                    })
                }
                this.resultsRetrieved++
    }
}