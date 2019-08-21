import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { globalStyle } from '../utils/GlobalStyles';

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    castListView() {
        castList = this.convertToCastList(this.props.detailMovie.Actors);
        return <FlatList id="cast" data={castList} renderItem={({ item }) =>
            <Text id="actorName">{item}</Text>
        } />
    }

    convertToCastList(castString) {
        if (castString == null) {
            return null;
        } else {
            return castString.split(", ");
        }
    }

    showRatingImage(ratingValue) {
        switch (ratingValue) {
            case "G":
                return require('../../assets/rated_g.png')
            case "PG":
                return require('../../assets/rated_pg.png')
            case "PG-13": 
                return require('../../assets/rated_pg13.png')
            case "R":
                return require('../../assets/rated_r.png') 
            default:
                return require('../../assets/logo.png')
        }
    }

    render() {
        return (
            <View>
                <Text id="title">{this.props.detailMovie.Title}</Text>
                <Image id="poster" onError={(e) => console.log(e.nativeEvent.error) } style={globalStyle.MovieListImage} source={{uri: this.props.detailMovie.Poster}}/>
                <Text id="year">{this.props.detailMovie.Year}</Text>
                <Text id="director">{this.props.detailMovie.Director}</Text>
                {this.castListView()}
                <Image id="rating" source={this.showRatingImage(this.props.detailMovie.Rated)}/>
                <Text id="plot">{this.props.detailMovie.Plot}</Text>
            </View>
        );
    }

    
}