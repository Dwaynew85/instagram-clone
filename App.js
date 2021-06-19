import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FIREBASE_CONFIG } from "@env"

import firebase from 'firebase';

if(firebase.apps.length === 0){
  firebase.initializeApp(FIREBASE_CONFIG)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
