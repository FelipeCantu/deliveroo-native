import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-blue'>
      <Text className='text-red-400'>Oo Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

