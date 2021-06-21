import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import ReportScreen from '../screens/ReportScreen'

const MainNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
      </Stack.Navigator>
    )
}

export default MainNavigator
