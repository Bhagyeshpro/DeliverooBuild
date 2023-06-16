import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';

const RestaurantCards = ({ id, title, imageURL, reviews, dishes, rating, genre, address, short_description, long, lat, }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} className="mr-3 mb-3 w-64 bg-white shadow-sm shadow-black">
      <Image
        source={{
          uri: imageURL
        }}
        className="h-40 w-full bg-slate-400"
      />

      {/* <View className="absolute w-full h-44 items-end justify-end">
        <View className="bg-white shadow-md relative p-1 w-20 -bottom-5 shadow-black items-center rounded-full">
          <Text className="text-black text-xl -bottom-1 font-extrabold">20 - 30</Text>
          <Text className="text-gray-400 text-base -top-1 font-semibold">mins</Text>
        </View>
      </View> */}

      <View className="px-3 pb-3">
        <Text className="text-black text-lg font-bold mt-3">{title}</Text>
        <View className="flex-row items-center">
          <Icons name="star" size={16} style={{ color: "#74c02a" }} />
          <Text className="text-base text-gray-400">
            <Text className="text-green-500 text-xs"> ({reviews}+)</Text>
            • {genre} • {genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity  >
  )
}

export default RestaurantCards

const styles = StyleSheet.create({})