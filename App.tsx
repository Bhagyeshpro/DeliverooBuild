import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { t } from 'react-native-tailwindcss';

const App = () => {
  return (
    <View style={[t.absolute, t.inset0, t.p4, t.bgPurple500]}>
      <Text className="text-red-600">Dev</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})