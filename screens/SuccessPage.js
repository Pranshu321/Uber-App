import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SuccessPage = () => {
  const navigation =  useNavigation();
  return (
    <View style={{
      alignItems: "center",
      marginTop: 20
    }}>
    <View style={{
      width: 200,
      height: 200,
      borderRadius: 100,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems:"center"
    }}>
      <Text style={{color: "white" , fontSize: 120}}>✔</Text>
    </View>
    <Text style={{fontSize: 18 , fontWeight: "600" , marginTop: 14}}> Ride Booked , You shortly receive Call</Text>
    <TouchableOpacity style={{
      backgroundColor: "black",
      marginTop: 30,
      paddingHorizontal: 35,
      paddingVertical: 15,
      borderRadius: 9
    }}
    onPress={()=>navigation.navigate("Home")}
    >
      <Text style={{
        color: "white",
        fontSize: 15,
        fontWeight: "600"
      }}> Home </Text>
    </TouchableOpacity>
    </View>
  )
}

export default SuccessPage

const styles = StyleSheet.create({})