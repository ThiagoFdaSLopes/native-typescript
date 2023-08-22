import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import style from './style'

const SplashScreen = () => {
  return (
      <>
          <View style={style.main}>
              <Image source={require('../../Images/logo.png')} />
          </View>
          <StatusBar backgroundColor={"#820AD1"}  barStyle={'light-content'} />
      </>
  )
}

export default SplashScreen;
