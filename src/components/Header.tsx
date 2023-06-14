import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View className="bg-purple-600">
      <Text style={{ color: "white" }}>Header</Text>
      <Image 
        style={{ width: 500, height: 50, resizeMode: "contain" }}
      source={{
        uri: "https://medfoodco.uk/wp-content/uploads/2020/06/614-6141092_order-online-logo-deliveroo-hd-png-download.jpg"
      }} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})