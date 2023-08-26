import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

import MainScreen from '../../Screens/MainScreen';

const AppRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MainScreen" component={MainScreen}/>
        </Stack.Navigator>
    )
}

export default AppRoutes
