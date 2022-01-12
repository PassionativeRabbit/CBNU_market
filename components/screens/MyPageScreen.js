import React, {useState, Component, useEffect } from "react";
import { Image, ScrollView } from 'react-native';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StyleSheet,
} from "react-native";
import { VStack, NativeBaseProvider, Box} from "native-base";
import { justifyContent } from "styled-system";
import IconA from 'react-native-vector-icons/AntDesign';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/Entypo';

import profile from '../assets/profile.png';
import { useNavigation } from '@react-navigation/core';

const MyPageScreen = () => {
    const navigation = useNavigation();
    const goToStack = (stackName) => {
        navigation.navigate(stackName);
    };

    return (
        <NativeBaseProvider>
            <ScrollView style={{backgroundColor:'white'}}>
                <Box style={{ marginTop: '10%', flexDirection:"row-reverse", alignItems:'center', justifyContent:'space-between', marginLeft:'10%', marginRight:'10%'}}>
                    <Image
                        source={profile}
                        style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <Box>
                        <Text style={{marginTop:'5%', fontSize:23, fontWeight:'bold'}}>스펀지밥 님</Text>
                        <Text style={{marginTop:'5%', fontSize:20}}>반갑습니다.</Text>
                    </Box>
                </Box>
                
                <Box style={{ marginTop: '3%', marginLeft: '10%', marginRight: '10%', flexDirection: 'column'}}>
                    <Box style={{ flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}>전화번호</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:14, textAlign:'center'}}>01065257098</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', marginTop:'3%', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 14 }}>이메일</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:14}}>wjddusgnl676@naver.com</Text>
                    </Box>
                    <Box style={{ flexDirection: 'row', marginTop:'3%', alignContent:'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 14 }}>생년월일</Text>
                        <Text style={{ fontSize: 14, textAlign: 'center' }}> : </Text>
                        <Text style={{marginLeft:'5%', fontSize:14}}>990904</Text>
                    </Box>
                </Box>
                
                <Box style={{ marginTop: '10%', marginLeft: '10%', marginRight: '10%', flexDirection:'column'}}>
                    <TouchableOpacity onPress={() => goToStack('ModifyAccountStack')}>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>회원 정보 수정</Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop:'5%' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>주문 내역</Text>
                        </Box>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Box style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginTop:'5%' }}>
                            <IconM name="navigate-before" size={25} style={{ justifyContent: 'center', textAlign: 'center' }}></IconM>
                            <Text fontSize={16} style={{justifyContent:'center', textAlign:'center'}}>로그아웃</Text>
                        </Box>
                    </TouchableOpacity>

                </Box>

                <Box marginTop='10%' marginLeft='5%' marginRight='5%' borderWidth={0.5}></Box>
                
                <Box style={{ marginTop: '10%', marginLeft: '5%', marginRight: '5%', flexDirection:'column'}}>
                    <Text>문의</Text>
                    <Text style={{marginTop:'3%'}}>E-mail : 123123123@naver.com</Text>
                    <Text style={{marginTop:'3%'}}>Tel : 010-2764-7036</Text>
                </Box>
                
            </ScrollView >
        </NativeBaseProvider>
    );
};

export default MyPageScreen;