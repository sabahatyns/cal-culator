import { StyleSheet,Button, Image, SafeAreaView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Button1 from "../components/Button1";

function Welcome(props ) {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.container}>

            <LinearGradient
                colors={["#FFFFFF", "#FFFFFF"]}
                start={[0.1, 0.1]}
                style={styles.linearGradient}
            >
                <Image
                    source={require("../assets/logo.jpg")}
                    style={styles.image}
                />
          

                <Button1 title="Let's Go"
                    onPress={() => props.navigation.navigate('Calculator')}/>

            </LinearGradient>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    linearGradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 25,
        
    },


});
export default Welcome;