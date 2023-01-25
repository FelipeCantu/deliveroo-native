import { View, Text, ScrollView, } from 'react-native'
import React, { useEffect, useStatew } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import SanityClientConstructor from '@sanity/client'

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant, setRestaurants] = useState([])

  useEffect(() => {
    SanityClient.fetch(
      `
      *[_type == "featured" && _id == &id] {
        ...,
        restaurants[]-> {
          ...,
          dishes[]->,
          type-> {
            name
          },
        }
      }[0]
      `,
      { id }
    )
    .then((data) => {
      setRestaurants(data?.restaurants)
    })
  }, [])

  console.log(restaurants)

  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className='font-bold text-lg text-black-500'>{title}</Text>
        <ArrowRightIcon color='#00bbcc' />
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/**Restaurant cards */}
        <RestaurantCard 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! shushi!'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={{}}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! shushi!'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={{}}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! shushi!'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={{}}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! shushi!'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={{}}
            long={20}
            lat={0}
        />
        <RestaurantCard 
            id={123}
            imgUrl='https://links.papareact.com/gn7'
            title='yo! shushi!'
            rating={4.5}
            genre='Japanese'
            address='123 Main St'
            short_description='This is a test description'
            dishes={{}}
            long={20}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow