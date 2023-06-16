import { SafeAreaView, ScrollView, TextInput, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import Header from '../components/Header';
import Icons from 'react-native-vector-icons/FontAwesome';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="bg-white flex-1">
            <Header />

            {/* Search */}
            <View className="flex-row mx-4 space-x-2 mb-3">
                <View className="flex-row items-center bg-gray-200 space-x-2 px-3 h-10 flex-1">
                    <Icons name="search" size={20} style={{ color: "#888", top: -2 }} />
                    <TextInput
                        placeholder="Restaurant and cuisines"
                        placeholderTextColor="#888"
                        className="text-lg -left-1 text-gray-500 font-semibold mr-2"
                    />
                </View>
                <MenuIcon name="menu" size={36} style={{ color: "#2dd4bf" }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Body */}
                <Categories />

                {/* Featured Rows */}
                <FeaturedRow
                    id="1236"
                    title="Offers near you!"
                    description="Why not support your local restaurant tonight!"
                    featuredCategory="offers"
                />
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placement from our partners"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id="1234"
                    title="Tasty discounts"
                    description="Everyone is being enjoying these juicy discounts!"
                    featuredCategory="discounts"
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
