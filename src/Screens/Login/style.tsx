import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#820AD1',
    },
    content: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    contentPassword: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    textInput: {
        width: '80%',
        height: 35,
        borderColor: 'black',
        borderRadius: 3,
        color: 'black',
        backgroundColor:"white",
        padding: 10,
        marginBottom: 10,
        fontSize: 14
    },
    buttonLogin: {
        width: '70%',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 5,
    },
    forgotPassword: {
        color: '#F6F6F6',
        fontSize: 12,
        fontStyle: 'italic',
        marginBottom: 5,
        fontWeight: "bold",
    },
    createAccount: {
        color: '#F6F6F6',
        fontSize: 12,
        marginTop: 12,
        fontWeight: "bold",
    },
    personText: {
        color: 'white',
        fontSize: 12,
        fontWeight: "700",
    }
})
