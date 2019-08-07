import { StyleSheet } from 'react-native';
import { blockbusterBlue, blockbusterYellow } from './AppConstants';
import { whileStatement } from '@babel/types';

export const globalStyle = StyleSheet.create({
    NavBackground: {
        backgroundColor: blockbusterBlue,
    },
    NavText: {
        // flex: 1,
        // alignContent: "center",
        // flexWrap: 'nowrap',
        color: blockbusterYellow,
        fontFamily: 'blockbuster',
        fontSize: 30,
        // maxWidth: 200,
        // lineHeight: 30,
        // maxHeight: 30,
        
        // src: url(require('../../assets/blockbuster.ttf')),
    },
    NavInputText: {
        backgroundColor: 'white',
    },
    NavItem: {
        tintColor: 'white',

    },
    NavBurger: {
        tintColor: blockbusterYellow,
    },
    NavLogo: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: blockbusterYellow,
    },
    NavBackButton: {
        tintColor: blockbusterYellow,
    }
});