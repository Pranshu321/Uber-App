import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from './NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API } from '@env';
import {setDestination , setOrigin} from '../slices/navslice';
import { useDispatch } from 'react-redux';
import NavFav from './NavFav';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 pt-12`} >
                <Image
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                />
                <GooglePlacesAutocomplete
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 19
                        },
                    }}
                    onPress={(data , details=null)=>{
                       dispatch(setOrigin({
                        location: {
                            "lat": 51.5078788 ,
                            "lng": -0.08773210000000001},
                       }))

                       dispatch(setDestination(null));
                       
                    }}
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

                <NavOptions />
                <NavFav />
            </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})