import React from 'react';
import { Image, Text, View } from 'react-native'
import { globalStyle } from '../../utils/GlobalStyles';

export default class SearchResultsCell extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state  = {
            titleReady: props.item.Title
        }
    }

    componentDidMount() {
        this.setState({
            imagePoster: {
                uri: this.props.item.Poster
            },
            title: this.props.item.Title,
            year: this.props.item.Year
        })
    }

    render() {
        return(
            <View style={globalStyle.MovieListItem}>
                <Image onError={(e) => console.log(e.nativeEvent.error) } style={globalStyle.MovieListImage} source={{uri:this.props.item.imageSrc.uri}}/>
                <View style={globalStyle.MovieListTextContainer}>
                    <Text style={globalStyle.MovieListText}>{this.props.item.title}</Text>
                    <Text style={globalStyle.MovieListText}>{this.props.item.year}</Text>
                </View>
            </View>
        )
    }
}