import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Map';
import NavigateCard from './NavigateCard';
import Ride from './Ride';
import NavFav from './NavFav';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import SuccessPage from './SuccessPage';
const MapsScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={tw`absolute top-16 left-8 bg-gray-100 z-50 p-3 rounded-full shadow-lg`}>
        <Icon 
          name='menu'

        />
      </TouchableOpacity>
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
          <Stack.Screen name='Success' component={SuccessPage} options={{
            headerShown: false
          }} />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapsScreen

const styles = StyleSheet.create({})