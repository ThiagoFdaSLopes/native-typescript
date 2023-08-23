import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({ }) => {
    const navigation = useNavigation();

    useEffect(() => {
        const interval = setInterval(() => {
            navigation.navigate('Login' as never)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [navigation])


    return (
        <>
            <View style={style.main}>
                <Image source={require('../../Images/logo.png')} />
            </View>
            <StatusBar backgroundColor={"#820AD1"} barStyle={'light-content'} />
        </>
    )
}

export default SplashScreen;
