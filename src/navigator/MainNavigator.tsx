import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen'
import ReportScreen from '../screens/ReportScreen'
import CalculatorScreen from '../screens/CalculatorScreen'

const MainNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown:false,
          gestureEnabled:false
        }}
        >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ReportScreen" component={ReportScreen} />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
      </Stack.Navigator>
    )
}

export default MainNavigator
