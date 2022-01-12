
import React, { Component, useState } from 'react'
import { Dimensions, } from "react-native"
import {
    NativeBaseProvider,
    Box,
    HStack,
    Text,
    VStack,
    Image,
    View,
    Button,
    flex
} from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// import { Camera } from 'expo-camera';
// const { status } = await Permissions.askAsync(Permissions.CAMERA);
//     this.setState({ hasCameraPermission: status === 'granted' });

const RegisterGoodsScreen = () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                {/* <View>
                    {loading ? (
                        <Loader />
                    ) : hasAllow ? (
                        <Camera/>
                    ) : null}
                </View> */}
                <Box style={{ backgroundColor: 'white', paddingLeft: '3%', paddingRight: '3%' }}>         
                    <Box style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <Ionicons 
                            name="star"
                            onPress={() => goToStack('searchstack')}
                            style={{
                                color:'red',
                                fontSize: 20,
                                paddingLeft:5,
                                paddingRight:5,
                            }}
                        />
                        <Text>상품명</Text>
                        <TextInput
                            style={{marginLeft:'3%'}}
                            borderBottomWidth={1}
                            placeholder={'상품명을 입력하세요.'}
                            onChangeText={(text) => onChangeTextLocation(text)}
                            
                        />
                    </Box>

                    <Box style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <Ionicons 
                            name="star"
                            onPress={() => goToStack('searchstack')}
                            style={{
                                color:'red',
                                fontSize: 20,
                                paddingLeft:5,
                                paddingRight:5,
                            }}
                        />
                        <Text>카테고리</Text>
                        <TextInput
                            style={{marginLeft:'3%'}}
                            borderBottomWidth={1}
                            placeholder={'카테고리를 입력하세요.'}
                            onChangeText={(text) => onChangeTextLocation(text)}
                            
                        />
                    </Box>

                    <Box style={{ flexDirection: 'row', paddingTop: '5%' }}>
                        <Ionicons 
                            name="star"
                            onPress={() => goToStack('searchstack')}
                            style={{
                                color:'red',
                                fontSize: 20,
                                paddingLeft:5,
                                paddingRight:5,
                            }}
                        />
                        <Text>가격</Text>
                        <TextInput
                            style={{marginLeft:'3%'}}
                            borderBottomWidth={1}
                            placeholder={'가격을 입력하세요.'}
                            onChangeText={(text) => onChangeTextLocation(text)}
                            
                        />
                        <Text>원</Text>
                    </Box>

                    <Box style={{ flexDirection: 'row', paddingTop:'5%'}}>
                        <Text>거래 위치</Text>
                        <TextInput
                            style={{marginLeft:'3%'}}
                            borderBottomWidth={1}
                            placeholder={'원하시는 거래 위치를 입력하세요.'}
                            onChangeText={(text) => onChangeTextLocation(text)}
                            
                        />
                    </Box>
                    
                    <Box style={{ paddingTop:'5%'}}>
                        <Text>상품 설명</Text>
                        <Box style={{flexDirection: 'row', alignItems: 'center', }}>
                            <TextInput height={200} maxLength={100} placeholder="상품을 설명해주세요" style={{ height: '20%', paddingLeft: '3%', placeholderTextColor: 'black', width: '100%', height: 40, borderWidth: 1, borderRadius: 4, }}></TextInput>
                        </Box>
                    </Box>

                    <Box style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <Button style={{ marginBottom: '3%', marginTop: '3%', borderRadius: 10, width: '40%', height: 60, borderWidth: 0.5, justifyContent: 'center', backgroundColor: 'black', alignContent:'center', alignItems:'center' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }} >상품 등록</Text>
                        </Button>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    );
};

export default RegisterGoodsScreen;