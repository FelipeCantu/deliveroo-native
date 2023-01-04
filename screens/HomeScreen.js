import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }, [])
  })
  return (
    <SafeAreaView>
      <Text className='text-blue-500'>HomeScreen</Text>
      <View>
        <Image 
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 rounded-full'
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen