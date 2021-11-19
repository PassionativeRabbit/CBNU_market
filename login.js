import React from 'react';
import {StyleSheet, View, Text, LayoutAnimation, TouchableOpacity, } from 'react-native';
import {Dimensions,} from "react-native"
import {
    Box,
    HStack,
    VStack,
    Image,
} from 'native-base';

export default function mainlayout({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('login');
    }

    return (
        <Box>
            <Box style={{ backgroundColor : 'yellow', height : '40%' }}>
                <Text marginTop={50}>123123</Text>
            </Box>
        </Box>
    )

}