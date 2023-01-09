import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/outline'

const RestaurantCard = ({ id, imgUrl, title, rating, genre, address,
    short_description, dishes, long, lat
}) => {
    return (
        <TouchableOpacity>
            <Image 
                source={{
                    uri: imgUrl,
                }}
                className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
                <Text className='font-bold text-lg pt-2'>{title}</Text>
                <View>
                    <StarIcon color='green' opacity={0.5} size={22} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard