import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import {createAppContainer} from 'react-navigation';

// const appnavigator = createDrawerNavigator({
//     Calculator:{
//       screen: Calculator
//     }
//   });

export default function Calculator() {
  // states
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');

  // colors
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  }
  // functionality
  const Calculate =(title) =>{
    if (title == 'C'){
      setResult('');
    }
    else if (title == 'D'){
      setResult(result.substring(0, result.length -1));
    }
    else if (title == '='){
const ans =Number(eval(result).toFixed(3)).toString()
setResult (ans);  }
else {
  setResult (result+ title);
}
  }
  // button
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => {Calculate (title)}}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark2),
        height: 50,
        width: 50,
        margin: 16,


      }}>
      <Text style={{
        fontSize: 37,
        color: "black",
        textAlign: 'center',
        verticalAlign: 'center',
        color: getBtnColor(type),
      }}> {title}</Text>
    </TouchableOpacity>
  )
  const getBtnColor = (type) => {
    if (type == 'right') {
      return '#0000FF'
    }
    else {
      return getColor(colors.dark, colors.light)
    }
  }
  const getColor = (light, dark) => darkTheme ? dark : light;
  return (
    <View style={{
      height: ' 100%',
      width: '100%',
      paddingVertical: 20,
      backgroundColor: getColor(colors.light, colors.dark),
      alignItems: 'center',
    }}>
      <Switch value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }} />

      {/* <Button  title='Menu' onPress={()=> this.props.navigator.openDrawer()} /> */}
      <View style={{
        flexDirection: 'row', flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: getColor(colors.light1, colors.dark1),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
      }}>
        <Btn title="C" type='number' />
        <Btn title="D" type='number' />
        <Btn title="/" type='number' />
        <Btn title="%" type='number' />
        <Btn title="7" type='number' />
        <Btn title="8" type='number' />
        <Btn title="9" type='number' />
        <Btn title="=" type='number' />
        <Btn title="4" type='number' />
        <Btn title="5" type='number' />
        <Btn title="6" type='number' />
        <Btn title="-" type='number' />
        <Btn title="1" type='number' />
        <Btn title="2" type='number' />
        <Btn title="3" type='number' />
        <Btn title="+" type='number' />
        <Btn title="00" type='number' />
        <Btn title="0" type='number' />
        <Btn title="." type='number' />
        <Btn title="=" type='number' />

      </View>
    </View>
  );
}
{/* 
      const styles = StyleSheet.create({
        container: {
        flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
}); */}
