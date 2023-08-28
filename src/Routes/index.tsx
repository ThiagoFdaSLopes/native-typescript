import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './AuthRoutes/AuthRoutes';
import AppRoutes from './AppRoutes/AppRoutes';

export default function Routes() {
    const user = false;
    return (
        <NavigationContainer>
            {
                user ? <AppRoutes /> : <AuthRoutes />
            }
        </NavigationContainer>
    )
}
