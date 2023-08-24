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
    textInput: {
        width: '70%',
        height: 40,
        borderColor: 'black',
        borderRadius: 3,
        color: 'black',
        backgroundColor:"white",
        padding: 10,
        marginBottom: 10,
    },
    contentPassword: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonRegister: {
        width: '70%',
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 5,
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 10,
        backgroundColor: 'white'
    },
})
