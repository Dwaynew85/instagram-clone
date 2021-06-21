import { StatusBar } from 'expo-status-bar';
import React from 'react';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-zX_rqEu8swNEbkP_QO_50aLA1d0dtHY",
  authDomain: "instagram-dev-723ae.firebaseapp.com",
  projectId: "instagram-dev-723ae",
  storageBucket: "instagram-dev-723ae.appspot.com",
  messagingSenderId: "898788509905",
  appId: "1:898788509905:web:42d5ca61bdff1852ef5df0",
  measurementId: "G-5B20G7C95C"
};

if(firebase.apps.length === 0){
  firebase.initializeApp(firebaseConfig)
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
