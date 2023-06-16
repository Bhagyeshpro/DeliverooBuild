import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgURL, title}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} className="mt-2 mr-2">
        <Image
            source={{
                uri: imgURL,
            }}
            className="h-20 w-20 rounded"
        />
      <Text className="-top-7 left-1 text-white font-extrabold text-lg">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard