import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NativeWindStyleSheet } from 'nativewind';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux'
import { store } from './store'
import BasketScreen from './screens/BasketScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
})

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/**Screen */}
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Restaurant' component={RestaurantScreen} />
          <Stack.Screen 
            name='Basket' 
            component={BasketScreen} 
            options={{
              presentation: 'modal', headerShown: false
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

