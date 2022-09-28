import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street , London, UK",
    },
    {
        id: "124",
        icon: "briefcase",
        location: "Work",
        destination: "London Eye , London, UK",
    }
]

const NavFav = () => {
  return (
    <FlatList 
        data={data}
        ItemSeparatorComponent={()=>(
            <View 
                style={[tw`bg-gray-200` , {height: 1}]}
            />
        )}
        keyExtractor={item=>item.id}
        renderItem={({item: {location , destination , icon}})=>(
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
                <Icon 
                    name={icon}
                    type='ionicon'
                    color="white"
                    size={18}
                    style={tw`mr-4 rounded-full bg-gray-300 p-3`}

                />
                <View>
                    <Text>{location}</Text>
                    <Text>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFav

const styles = StyleSheet.create({})