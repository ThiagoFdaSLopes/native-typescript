import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#820AD1',
    },
    image: {
        width: 128,
        height: 128,
        marginBottom: 10,
        backgroundColor: 'white'
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
    buttonLogin: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
})
