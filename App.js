import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './navigation/screen/main';
import AboutScreen from './navigation/screen/about';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="main">
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="about" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
