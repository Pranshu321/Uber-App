import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import MapView , {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { SelectOrigin } from '../slices/navslice';
import { GOOGLE_MAPS_API } from '@env';
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    const origin = useSelector(SelectOrigin)
    return (
        <MapView 
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: 51.5078788,
                longitude: -0.08773210000000001,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
        {/* <MapViewDirections 
            origin={"London Bridge"}
            destination={"Facebook"}
            apikey={GOOGLE_MAPS_API}
            strokeWidth={3}
            strokeColor="black"
        /> */}

        <Marker 
          coordinate={{
            latitude: 51.5078788,
            longitude: -0.08773210000000001
          }}
          title="Origin"
          description='London Bridge'
          identifier='origin'
        />
        



        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({})