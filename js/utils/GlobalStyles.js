import { StyleSheet } from 'react-native';
import { blockbusterBlue, blockbusterYellow } from './AppConstants';

export const globalStyle = StyleSheet.create({
    LoginContainer: {
        flex: 1,
        backgroundColor: blockbusterYellow,
    },
    LoginSpacer: {
        flex: 1,
    },
    LoginView: {
        alignItems: 'center',
        flex: 10,
    },
    LoginContentView: {
        alignSelf: 'center',
    },
    LoginGroup: {
        paddingVertical: 20,
        alignItems: 'center',
        alignSelf: 'center',
        width: 200,
    },
    LoginText: {
        padding: 20,
        fontFamily: 'Machine LT',
        fontSize: 15,
        color: blockbusterBlue,
    },
    LoginLabel: {
        alignSelf: 'flex-start',
        fontFamily: 'Machine LT',
        fontSize: 15,
        color: blockbusterBlue,
        marginRight: "auto",
        width: 100
    },
    LoginButton: {
        backgroundColor: blockbusterBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20/2,
        borderColor: blockbusterYellow,
        borderStyle: "solid",
        borderWidth: 5,
        width: 200,
    },
    LoginButtonPressed: {
        backgroundColor: blockbusterBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20/2,
        borderColor: blockbusterYellow,
        borderStyle: "solid",
        borderWidth: 2,
        scaleX: 1.2,
        scaleY: 1.2,
        width: 200,

    },
    LoginButtonDisabled: {
        backgroundColor: blockbusterBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20/2,
        borderColor: blockbusterYellow,
        borderStyle: "solid",
        borderWidth: 2,
        width: 200,
        opacity: 0.5,
    },
    LoginButtonText: {
        color: blockbusterYellow,
        fontFamily: 'Machine LT',
        fontSize: 24,
        textAlign: "center",
    },
    LoginButtonTextDisabled: {
        color: blockbusterYellow,
        fontFamily: 'Machine LT',
        fontSize: 24,
        textAlign: "center",
        opacity: 0.5,
    },
    NavBackground: {
        backgroundColor: blockbusterBlue,
        borderBottomWidth: 5,
        borderBottomColor: blockbusterYellow,
        height: 80,
    },
    NavText: {
        color: blockbusterYellow,
        fontFamily: 'Machine LT',
        fontSize: 24,
        textAlign: "center",
        width: '60%'
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
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        backgroundColor: blockbusterYellow,
    },
    NavBackButton: {
        tintColor: blockbusterYellow,
    },
    InputField: {
        height: 40,
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 20,
        paddingHorizontal: 20,
    },
    BurgerHeader: {
        backgroundColor: blockbusterBlue,
        padding: 30,
        borderBottomWidth: 10,
        borderBottomColor: blockbusterYellow,
        alignItems: "center",
    },
    BurgerUserName: {
        fontFamily: 'Machine LT',
        color: blockbusterYellow,
        fontSize: 30,
        padding: 5,
    },
    BurgerWelcome: {
        fontFamily: 'Machine LT',
        color: blockbusterYellow,
        fontSize: 14,
        padding: 5,
    },
    MovieListItem: {
        flexDirection: "row",
        marginVertical: 10,
        padding: 8,
        textAlign: 'center',
        alignContent: 'center',
        height: 80,
        width: '98%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    MovieLargeImage: {
        marginHorizontal: 10,
        width: 120,
        height: 120,
        borderRadius: 10,
    }, 
    MovieListImage: {
        marginHorizontal: 10,
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    MovieListText: {
        fontFamily: 'Machine LT',
        color: blockbusterBlue,
        overflow: 'hidden',
        flexWrap: 'nowrap',
        fontSize: 18,
    },
    MovieListTextContainer: {
        height: 60,
        width: 300,
    },
    HomeListTitleLabel: {
        color: blockbusterBlue,
        fontWeight: 'bold',
        fontSize: 20,
    },
    HomeListDirectorLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    HomeListYearLabel: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    HomeListItem: {
        flexDirection: "row",
        marginVertical: 10, 
        textAlign: 'center',
        alignContent: 'center',
        height: 200,
        width: '98%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        overflow: "hidden",
    }, 
    HomeListRating: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    LargeRating: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    HomeListStarRating: {
        width: 138,
        height: 20,
        marginRight: 10,
    },
    HomeListPoster: {
        flex:1, 
        width: null, 
        height: null 
    },
    HomeListTextContainer: {
        padding: 10,
    },
    InputWarning: {
        width: 100,
        fontSize: 12,
        textAlign: "right" ,
        color: "#e91e63"
    },
    LargeTitleLabel: {
        color: blockbusterYellow,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        width: '100%',
        padding: 10,
    },
    DetailOverviewItem: {
        flexDirection: "row",
        marginBottom: 10, 
        textAlign: 'center',
        alignContent: 'center',
        width: '90%',
        height: 300,
        overflow: "hidden",
        paddingVertical: 10
    },
    DetailPoster: {
        margin: 0,
        flex: 1,
        
    },
    DetailPosterWrapper: {
        marginRight: 10,
        flex: 1,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 5,
    },
    DetailSummary: {
        flex: 1,
        padding: 20,
        lineHeight: 25,
        marginBottom: 20, 
        textAlign: 'left',
        fontSize: 20,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        overflow: "hidden",
    },
    DetailInfoWrapper: {
        flex: 1,
    }
});