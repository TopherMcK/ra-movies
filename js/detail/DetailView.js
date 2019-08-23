import React from 'react';
import { TouchableOpacity, FlatList, Image, ScrollView, Text, View } from 'react-native';
import { globalStyle } from '../utils/GlobalStyles';
import { ratingImageUtil } from '../utils/RatingImageUtil';
import BasicHeader from '../shared/BasicHeader';
import { blockbusterBlue, blockbusterYellow } from '../utils/AppConstants';
import { contentLoadingObserver } from '../observers/ContenLoadingObserver';

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
    }

    castListView() {
        castList = this.convertToCastList(this.props.detailMovie.Actors);
        return <FlatList id="cast" style={{marginTop:15}} ListHeaderComponent={<BasicHeader />} data={castList} renderItem={({ item }) =>
            <Text id="actorName" style={{paddingLeft: 5, fontSize: 15, color: "#fff"}}>{`\u2022`} {item}</Text>
        } />
    }

    convertToCastList(castString) {
        if (castString == null) {
            return null;
        } else {
            return castString.split(", ");
        }
    }

    render() {
        return (
            <View style={{height: '100%', width: '100%'}}>
                <ScrollView contentContainerStyle={{alignItems: "center"}} style={{backgroundColor: blockbusterBlue, flex: 1}}>
                <Text id="title" style={globalStyle.LargeTitleLabel}>{this.props.detailMovie.Title}</Text>
                <View style={globalStyle.DetailOverviewItem}>
                    <View style={globalStyle.DetailPosterWrapper}>
                        <Image id="poster" onError={(e) => console.log(e.nativeEvent.error) } style={globalStyle.DetailPoster} source={{uri: this.props.detailMovie.Poster}}/>
                    </View>
                    <View style={{flex: 0.4}}></View>
                    <View style={globalStyle.DetailInfoWrapper}>
                        <View style={{flexDirection: "row"}}>
                            <Image id="rating" source={ratingImageUtil.getImageForRating(this.props.detailMovie.Rated)} style={globalStyle.LargeRating}/>
                            <Text id="year" style={{fontSize: 20, textAlign: "right", fontStyle: "italic", color: blockbusterYellow}}>{this.props.detailMovie.Year}</Text>
                        </View>
                        <Text id="director" style={{fontSize: 20, marginTop: 15, fontWeight: "bold", color: blockbusterYellow}}>{`Director:\n`}{this.props.detailMovie.Director}</Text>
                        {this.castListView()}

                        <View style={{width: ratingImageUtil.getStarImageWidth(this.props.detailMovie.imdbRating), overflow: 'hidden'}}>
                            <Image id="imdbRating" source={require("../../assets/stars.png")} style={{width: 138, tintColor: blockbusterYellow}} />
                        </View>
                    </View>
                </View>
                <Text id="plot" style={globalStyle.DetailSummary}>{`\t`}{this.props.detailMovie.Plot}</Text>
            </ScrollView>
            <TouchableOpacity onPress={() => this.returnUser()} activeOpacity={0.8} style={{width: 50, height: 50, position: 'absolute', top: 10, right: 10, zIndex: 1000, alignItems: 'center', backgroundColor: blockbusterBlue, padding: 8, borderWidth: 5, borderRadius: 50, borderColor: blockbusterYellow}}>
                    <Text style={{fontFamily: 'Machine LT', fontSize: 20, color: blockbusterYellow}}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }

    returnUser() {
        contentLoadingObserver.sendIsContentLoading(false);
    }
}