import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Currency from 'react-currency-formatter'
import { TouchableOpacity } from 'react-native'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItems } from '../features/basketSlice'

const DishRow = ({ id, name, description, price, image }) => {
    const [isPressed, setIsPressed] = useState(false)
    const items = useSelector(selectBasketItems)
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, description, price, image }))
    }
    return (
        <>
            <TouchableOpacity
                onPress={() => setIsPressed(!isPressed)}
                className={`'bg-white border p-4 border-gray-200' ${ isPressed && 'border-b-0'}`}
            >
                <View className='flex-row'>
                    <View className='flex-1 pr-2'>
                        <Text className='text-lg mb-1'>{name}</Text>
                        <Text className='text-gray-400'>{description}</Text>
                        <Text className='text-gray-400 mt-2'>
                            <Currency quantity={price} currency='USD' />
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={{
                            borderWidth: 1,
                            borderColor: '#f3f3f4'
                        }}
                        source={{
                            uri: urlFor(image).url()
                        }}
                        className='h-20 w-20 bg-gray-500 p-4'
                    />
                </View>
            </TouchableOpacity>
            {isPressed && (
                <View>
                    <View>
                        <TouchableOpacity>
                            <MinusCircleIcon size={40} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon color='#00ccbb' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow