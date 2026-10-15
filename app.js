import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WardrobeScreen from './screens/WardrobeScreen';
import AddClothingScreen from './screens/AddClothingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'QuickFit' }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Create Account' }}
        />

        <Stack.Screen
          name="Wardrobe"
          component={WardrobeScreen}
          options={{ title: 'My Wardrobe' }}
        />

        <Stack.Screen
          name="AddClothing"
          component={AddClothingScreen}
          options={{ title: 'Add Clothing' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}