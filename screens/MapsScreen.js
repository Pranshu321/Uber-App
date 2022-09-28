import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Map';
import NavigateCard from './NavigateCard';
import Ride from './Ride';
import NavFav from './NavFav';
const MapsScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
       <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator initialRouteName='NavigateCard'>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{
            headerShown: false
          }} />
          <Stack.Screen name='Ride' component={Ride} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({})