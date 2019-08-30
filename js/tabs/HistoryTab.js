import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import HomeCell from '../shared/cells/HomeCell'
import BaseTab from './BaseTab';
import { activityIndicatorHelper } from '../shared/indicators/ActivityIndicatorHelper'
import { NavigationEvents } from "react-navigation";
import { historyOfMovies } from '../utils/AppConstants';

export default class HistoryTab extends BaseTab {

    getContentView() {
        return this.showHistoryList();
    }

    updateListUI() {
        this.setState(this.state);
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

    showHistoryList() {
        if (historyOfMovies.length > 0) {
            return <View>
                <View>{activityIndicatorHelper.checkToShowActivityIndicator(this.state.isLoading)}</View>
                <NavigationEvents
                    onWillFocus={payload => this.updateListUI()}
                />
                <FlatList data={historyOfMovies} extraData={this.state} keyExtractor={(item, index) => item + index} renderItem={({ item }) =>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.sendUserToMovieDetail(item.Title)} >
                        <HomeCell item={this.SetupCell(item)} />
                    </TouchableOpacity>
                }
                />
            </View>
        }
        else {
            return <View>
                <NavigationEvents onWillFocus={payload => this.updateListUI()} />
                <Text>Your history is empty!</Text>
            </View>
        }
    }
}