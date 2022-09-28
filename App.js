import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from "react-redux";
import Home from './screens/Home';
import NavOptions from './screens/NavOptions';
import { store } from './Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapsScreen from './screens/MapsScreen';
import EatsScreen from './screens/EatsScreen';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import NavigateCard from './screens/NavigateCard';
import Ride from './screens/Ride';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
              <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                  headerShown: false
                }} />
                <Stack.Screen name='Maps' component={MapsScreen} options={{
                  headerShown: false
                }} />
                <Stack.Screen name='Eats' component={EatsScreen} options={{
                  headerShown: false
                }} />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
