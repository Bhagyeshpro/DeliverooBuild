import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/FontAwesome';
import ArrowIcon from "react-native-vector-icons/MaterialIcons"


const Header = () => {
    return (
        <View className="bg-white flex-row pb-2 items-center ml-4 mr-6 my-2 space-x-2">
            <Image
                className="h-10 w-10 rounded-full"
                // style={{ width: 50, height: 50, resizeMode: "contain" }}
                source={{
                    uri: "https://image.similarpng.com/very-thumbnail/2020/06/Fast-delivery-package-with-motorcycle-illustration-transparent-PNG.png"
                }} />
            <View className="flex-1 items-start">
                <Text className="text-xs font-bold text-gray-400" >Deliver Now!</Text>
                <View className="flex-row">
                    <Text className="text-2xl font-bold text-black">Current Location</Text>
                    <TouchableOpacity>
                        <ArrowIcon name="keyboard-arrow-down" size={30} style={{ color: "#2dd4bf" }} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <Icons name="user-o" size={28} style={{ color: "#2dd4bf" }} />
            </TouchableOpacity>
        </View>
    )
}

export default Header
