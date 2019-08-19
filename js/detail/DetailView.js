import React from 'react';
import { Text } from 'react-native';

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Text id="title">{this.props.detailMovie.Title}</Text>
        );
    }
}