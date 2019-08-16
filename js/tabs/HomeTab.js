import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { searchService } from '../rest/SearchService';
import { searchSuggestionObserver } from '../observers/SearchResultsObserver';

export default class HomeTab extends React.Component {


    componentDidMount() {
        searchSuggestionObserver.getSearchSuggestionResults().subscribe((value) => {
            // console.log("@@@@@ " + value);
        })
        searchService.getSearchSuggestionResults('home');
    }

    render() {
        return (
            <Text>Home Tab</Text>
        );
    }
}