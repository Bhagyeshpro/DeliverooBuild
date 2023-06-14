import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="bg-black flex-1" style={{ flex: 1, backgroundColor: "white" }}>
            <Header/>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})