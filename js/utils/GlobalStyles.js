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
        fontFamily: "blockbuster",
        fontSize: 15,
        color: blockbusterBlue,
    },
    LoginLabel: {
        alignSelf: 'flex-start',
        fontFamily: "blockbuster",
        fontSize: 15,
        color: blockbusterBlue,
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
        fontFamily: 'blockbuster',
        fontSize: 24,
        textAlign: "center",
    },
    LoginButtonTextDisabled: {
        color: blockbusterYellow,
        fontFamily: 'blockbuster',
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
        fontFamily: 'blockbuster',
        fontSize: 30,
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
        fontFamily: 'blockbuster',
        color: blockbusterYellow,
        fontSize: 30,
        padding: 5,
    },
    BurgerWelcome: {
        fontFamily: 'blockbuster',
        color: blockbusterYellow,
        fontSize: 14,
        padding: 5,
    },
    MovieListItem: {
        alignSelf: "center",
        height: 50,
        width: '90%',
        backgroundColor: 'grey',
        color: 'black',
        borderRadius: 20,
        fontFamily: 'blockbuster',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }, 
});