// import * as React from 'react';
// import { StyleSheet, SafeAreaView, ScrollView, Text, View } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './screens/splash';
// import Calculator from './screens/calculator';
// import Loc from './screens/location';
// // import Draw from './screens/drawer';



// const Stack = createNativeStackNavigator();

// export default function App() {


//   return (
//     <NavigationContainer >
//       <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName='Welcome'>
//         <Stack.Screen   name="welcome" component={Welcome} />
        
//         <Stack.Screen   name="location" component={Loc} />
//         {/* <Stack.Screen   name="drawer" component={Draw} /> */}

//         <Stack.Screen   name="Calculator" component={Calculator} />

       

//       </Stack.Navigator>
//     </NavigationContainer>
//     )
//   }

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Loc from './screens/location';
import Calculator from './screens/calculator';
import Icon from './screens/changeicon';

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='calculator'>
       
        <Drawer.Screen name="Calculator" component={Calculator} />
        <Drawer.Screen name="Location" component={Loc} />
        <Drawer.Screen name="Change App Icon" component={Icon} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}