import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]


const Ride = () => {
  const navigation = useNavigation();
  const [selected, setselected] = useState(null);
  const [dist, setdist] = useState(65);

  const SURGE_CHARGE = 1.5;

  useEffect(() => {
    setdist(Math.floor(Math.random() * 65))
  }, []);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
          <Icon name='chevron-left' type='fontaweosme' />
        </TouchableOpacity>
        <Text style={[tw`text-center py-5 text-xl`, { fontWeight: "600" }]}>Select a Ride - 32.6 mi</Text>
      </View>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, multiplier, title }, item }) => (
          <TouchableOpacity onPress={() => setselected(item)} style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-200"}`}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6  justify-center`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{dist} mins Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              ₹
              {
                ((dist * SURGE_CHARGE * multiplier).toFixed(2))
              }
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={{ marginTop: -10 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Success")} disabled={!selected} style={tw`bg-black py-3 m-3 rounded-lg ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Ride

const styles = StyleSheet.create({})