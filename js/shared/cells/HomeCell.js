import React from 'react';
import { Image, Text, View } from 'react-native'
import { globalStyle } from '../../utils/GlobalStyles';
import { ratingImageUtil } from '../../utils/RatingImageUtil';

export default class HomeCell extends React.Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state  = {
            titleReady: props.item.Title,
            starWidth: 0,
            title: this.props.item.title
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
            <View style={globalStyle.HomeListItem} >
                <Image onError={(e) => console.log(e.nativeEvent.error) } style={globalStyle.HomeListPoster} source={{uri:this.props.item.imageSrc.uri}}/>
                <View style={globalStyle.MovieListTextContainer}>
                    <View style={globalStyle.HomeListTextContainer}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image style={globalStyle.HomeListRating} source={ratingImageUtil.getImageForRating(this.props.item.rated)} />
                            <Text style={globalStyle.HomeListTitleLabel}>{this.props.item.title}</Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={globalStyle.HomeListYearLabel}>{this.props.item.year}</Text>
                            <Text style={globalStyle.HomeListDirectorLabel}>Director: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{this.props.item.director}</Text></Text>
                        </View>
                        <View style={{paddingVertical: 15}}>
                        <Text style={globalStyle.HomeListDirectorLabel}>Cast: <Text style={{fontStyle: 'italic', fontWeight: 'normal'}}>{this.props.item.cast}</Text></Text>
                        </View>

                        <View style={{width: ratingImageUtil.getStarImageWidth(this.props.item.imdbRating), overflow: 'hidden'}}>
                            <Image style={{width: 138}} source={require('../../../assets/stars.png')} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}