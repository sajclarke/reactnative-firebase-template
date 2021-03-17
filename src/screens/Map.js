import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%', 
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class Map extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    region={{
                        latitude: 13.113222,
                        longitude: -59.598808,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >

                    {/* <Marker
                    coordinate={{}}
                    /> */}
                </MapView>
            </View>
        )
    }
}
