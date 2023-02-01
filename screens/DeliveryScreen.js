import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { XIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-web'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    return (
        <View className='bg-[#00bbcc] flex-1'>
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <XIcon color='white' size={30} />
                    </TouchableOpacity>
                    <Text>Order Help</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default DeliveryScreen