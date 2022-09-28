import { FlatList, StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";
import {Icon} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const data = [
    {
      id: '123',
      title: "Get a ride",
      image: "https://links.papareact.com/3pn",
      screen: "Maps"
    },
    {
        id: '124',
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "Eats"
    }
]

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList 
      style={{marginLeft: 0}}
      data={data}
      horizontal
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 h-60 rounded-lg pt-4 bg-gray-200 m-2 w-40`}>
        <View>
          <Image 
            source={{uri: item.image}}
            style={{width: 120 , height: 120 , resizeMode: "contain"}}
          />
          <Text style={{fontSize: 17 , fontWeight: "700" , paddingTop: 10}}>{item.title}</Text>
          <Icon 
            name='arrowright'
            color={"white"}
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            type="antdesign"
          />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})