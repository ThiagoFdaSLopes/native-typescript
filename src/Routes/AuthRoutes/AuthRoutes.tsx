import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../../Screens/Login';
import Register from '../../Screens/Register';
import ForgotPassword from '../../Screens/ForgotPassword';
// import SplashScreen from '../../Screens/Splash';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default AuthRoutes
