import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome5';
import RestaurantCards from './RestaurantCards';

const FeaturedRow = ({ title, id, featuredCategory, description }) => {
  return (
    <View className="flex-1">

      <View className="flex-row mx-4 items-center">
        <Text className="flex-1 text-black text-xl font-extrabold">{title}</Text>
        <TouchableOpacity>
          <Icons name="arrow-right" size={20} style={{ color: "#2dd4bf" }} />
        </TouchableOpacity>
      </View>

      <Text className="mx-4 text-gray-400 text-sm font-semibold">{description}</Text>

      <ScrollView 
        horizontal
        contentContainerStyle={{
          paddingLeft: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-3 "
      >
        {/* RestaurantCards... */}
        <RestaurantCards
          id="124"
          title="Wagamama"
          imageURL="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          rating="4.5"
          reviews="35"
          genre="Japanese"
          address="135 Long Street"
          lat="21.149870"
          long="79.109741"
          dishes={["Sushi", "Unagi", "Onigiri", "Soba" ]}
        />
        <RestaurantCards
          id="124"
          title="Susi"
          imageURL="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          rating="4.5"
          reviews="35"
          genre="Japanese"
          address="135 Long Street"
          lat="21.149870"
          long="79.109741"
          dishes={["Sushi", "Unagi", "Onigiri", "Soba" ]}
        />
        <RestaurantCards
          id="124"
          title="Susi"
          imageURL="https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          rating="4.5"
          reviews="35"
          genre="Japanese"
          address="135 Long Street"
          lat="21.149870"
          long="79.109741"
          dishes={["Sushi", "Unagi", "Onigiri", "Soba" ]}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow
