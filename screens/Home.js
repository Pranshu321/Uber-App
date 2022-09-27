import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native'
// import SafeAreaView from 'react-native-safe-area-view';
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from './NavOptions';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5 pt-12`} >
                <Image 
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                    style={{width: 100 , height: 100 , resizeMode: "contain"}}
                />
            </View>
            <NavOptions />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})