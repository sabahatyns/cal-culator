import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Loc from '../screens/location';
import Calculator from '../screens/calculator';

const Drawer = createDrawerNavigator();
import { Text } from 'react-native';

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName='calculator'>
        <Drawer.Screen 
        options={{headerShown: true}}
        name="Home" component={Loc}
         />
        <Drawer.Screen name="Notifications" component={Calculator} />
      </Drawer.Navigator>
  );
}