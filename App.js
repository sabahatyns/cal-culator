import * as React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/splash';
import Calculator from './screens/calculator';


const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer >
      <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName='Welcome'>
        <Stack.Screen   name="welcome" component={Welcome} />
        <Stack.Screen   name="Calculator" component={Calculator} />
       

      </Stack.Navigator>
    </NavigationContainer>
    )
  }