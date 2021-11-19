import React from 'react';
import {StyleSheet, View, Text, LayoutAnimation, TouchableOpacity, } from 'react-native';
import {Dimensions,} from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    VStack,
    Image,
} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';
import {layout} from './styles';

// import layout from './styles';

export default function mainlayout({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('login');
    }

    return (
            <NativeBaseProvider>
                <Box>
                    {/* <Box style={{ backgroundColor : 'yellow', height : '40%' }}> */}
                        <HStack>
                            <Icon name="bars" size={30} color="#333" />
                            <Icon name="search" size={30} color="#333" style={{marginLeft : '80%'}}></Icon>
                            <Icon name="bell" size={30} color="#333"></Icon>
                        </HStack>
                        <Text style={layout.textLayout}>안녕하세용</Text>
                   {/* </Box> */}

                    <Box>
                        <View>
                        
                        </View>
                    </Box>
                </Box>
            </NativeBaseProvider>
    )

}