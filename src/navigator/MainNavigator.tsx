import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'

const MainNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    )
}

export default MainNavigator
