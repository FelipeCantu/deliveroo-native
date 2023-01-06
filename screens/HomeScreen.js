import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from 'react-native-heroicons/outline'

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }, [])
  })
  return (
    <SafeAreaView>
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image 
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>
            Deliver Now!
          </Text>
          <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color='#00ccbb' />
          </Text>
        </View>
        <UserIcon size={35} color='#00ccbb' />
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen