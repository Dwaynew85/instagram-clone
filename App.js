import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FIREBASE_CONFIG } from "react-native-dotenv"

import firebase from 'firebase';

if(firebase.apps.length === 0){
  firebase.initializeApp(FIREBASE_CONFIG)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false }}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
