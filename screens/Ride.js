import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const Ride = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 rounded-full`}>
            <Icon name='chevron-left' type='fontaweosme' />
        </TouchableOpacity>
        <Text style={[tw`text-center py-5 text-xl` , {fontWeight: "600"}]}>Select a Ride</Text>
      </View>
    </SafeAreaView>
  )
}

export default Ride

const styles = StyleSheet.create({})