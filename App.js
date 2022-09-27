import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import Home from './screens/Home';
import NavOptions from './screens/NavOptions';
import { store } from './Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapsScreen from './screens/MapsScreen';
import EatsScreen from './screens/EatsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
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
        </Provider>
      </NavigationContainer>
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
