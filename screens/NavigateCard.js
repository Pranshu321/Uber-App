import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
GooglePlacesAutocomplete;
import { GOOGLE_MAPS_API } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navslice';
import NavFav from './NavFav';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';


const NavigateCard = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={[tw`text-center py-5 text-xl`, { fontWeight: "600" }]}>Good Morning , Pranshu</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete
                    placeholder='Where To?'
                    styles={styless}
                    returnKeyType={"search"}
                    fetchDetails={true}
                    query={{
                        key: GOOGLE_MAPS_API,
                        language: 'en',
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    minLength={2}
                    enablePoweredByContainer={false}
                />
                <NavFav />
            </View>
            <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity onPress={()=>navigation.navigate("Ride")} style={tw`flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}>
                    <Icon name='car' type='font-awesome' color={"white"} size={16} />
                    <Text style={tw`text-white text-center`}>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
                    <Icon name='fast-food-outline' type='ionicon' color={"white"} size={16} />
                    <Text style={tw`text-white text-center pl-2`}>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styless = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: "#DDDBDF",
        borderRadius: 5,
        fontSize: 19
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})