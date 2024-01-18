import { changeIcon, getIcon, resetIcon } from 'react-native-change-icon';
import { StyleSheet,Pressable, View,Alert,Button, Text,Image, SafeAreaView, } from "react-native";


function Icon( ) {
    
    return (
        <View>
      <Pressable onPress={() =>changeIcon('Dark')
}>
        <Image
           source={require("../assets/icon.png")}
          style={styles.image}
         
        />
      </Pressable>
    </View>
    );
}


const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100,
        borderRadius:35,
        marginBottom: 25,
        
    },
});
export default Icon;

