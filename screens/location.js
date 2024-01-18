import * as Location from 'expo-location';
import { StyleSheet, View, Text, } from 'react-native';
import MapView from 'react-native-maps';

import { useState, useEffect } from 'react';
export default function Loc() {
    const [location, setLocation] = useState(null);
    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Location.watchPositionAsync({}, (location) => {
                    console.log(location);
                })
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })();
    }, []);

   
    return (
        <View style={styles.container}>
            <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            provider='google' 
            style={styles.map} />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})