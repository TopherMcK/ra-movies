import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import { globalStyle } from '../../utils/GlobalStyles';

export default class HomeCell extends React.Component {
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

    showRatingImage(ratingValue) {
        switch (ratingValue) {
            case "G":
                return require('./../../../assets/rated_g.png')
            case "PG":
                return require('./../../../assets/rated_pg.png')
            case "PG-13":
                return require('./../../../assets/rated_pg13.png')
            case "R":
                return require('./../../../assets/rated_r.png')
            default:
                break;
        }
    }
    showStarImage(ratingValue) {
        return require('./../../../assets/stars.png')
    }

    render() {
        return(
            <View style={globalStyle.HomeListItem}>
                <Image onError={(e) => console.log(e.nativeEvent.error) } style={globalStyle.HomeListPoster} source={{uri:this.props.item.imageSrc.uri}}/>
                <View style={globalStyle.MovieListTextContainer}>
                    <View style={globalStyle.HomeListTextContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image style={globalStyle.HomeListRating} source={this.showRatingImage(this.props.item.rated)} />
                            <Text style={globalStyle.HomeListTitleLabel}>{this.props.item.title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={globalStyle.HomeListYearLabel}>{this.props.item.year}</Text>
                            <Text style={globalStyle.HomeListDirectorLabel}>Director: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{this.props.item.director}</Text></Text>
                        </View>
                        <View style={{paddingVertical: 15}}>
                        <Text style={globalStyle.HomeListDirectorLabel}>Cast: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{this.props.item.cast}</Text></Text>
                        </View>
                        <Image style={globalStyle.HomeListRating} source={this.showStarImage(this.props.item.imdbRating)} />
                        {/* <Text style={globalStyle.HomeListText}>{this.props.item.imdbRating}</Text> */}
                        </View>
                    </View>
            </View>
        )
    }
}