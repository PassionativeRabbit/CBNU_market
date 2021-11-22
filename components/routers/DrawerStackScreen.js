import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TabStackScreen from './TabStackScreen';
import MenuButton from './MenuButton';
import { Ionicons } from '@expo/vector-icons';
import {Dimensions,} from "react-native"
import{ NativeBaseProvider, Box, HStack, Text, Image, View, flex, FlatList }from 'native-base';
import { TouchableOpacity, ScrollView, TextInput, } from "react-native";


const MainDrawer = createDrawerNavigator();

const CustomDrawer = ({navigation}) => {
    const goToStack = (stackName) => {
        navigation.navigate(stackName);
    };

    return (
        <DrawerContentScrollView>
            {/* <DrawerItem
                label="HOME"
                onPress={() => goToStack('homestack')}
                style={{
                    borderBottomWidth:1,
                    borderRadius:0,
                    borderColor:'#ecf0f1'
                }}
            >
            </DrawerItem>
            <DrawerItem
                label="Search"
                onPress={() => goToStack('searchstack')}
                style={{
                    borderBottomWidth:1,
                    borderRadius:0,
                    borderColor:'#ecf0f1'
                }}
            >
            </DrawerItem>
            <DrawerItem
                label="Shopping"
                onPress={() => goToStack('shopstack')}
                style={{
                    borderBottomWidth:1,
                    borderRadius:0,
                    borderColor:'#ecf0f1'
                }}
            >
            </DrawerItem>
            <DrawerItem
                label="Chatting"
                onPress={() => goToStack('chatliststack')}
                style={{
                    borderBottomWidth:1,
                    borderRadius:0,
                    borderColor:'#ecf0f1'
                }}
            >
            </DrawerItem>
            <DrawerItem
                label="My Page"
                onPress={() => goToStack('mypagestack')}
            >
            </DrawerItem> */}
            <NativeBaseProvider>

                <TouchableOpacity style={{flexDirection:'row-reverse'}}>
                    <Ionicons 
                        name="close"
                        onPress={() => goToStack('homestack')} // 홈으로 가게 했는데, 변경하고자 하면 변경할 예정
                        style={{
                            fontSize: 25,
                            marginRight: '3%'
                        }}
                    />
                </TouchableOpacity>

                <Text style={{ marginTop: '10%', marginLeft: '5%' }}>인기 카테고리</Text>
                <View style={{ marginTop: '5%', justifyContent:"center", alignItems:"center"}}> 
                    <HStack space={5}>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/woman_cloth.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>여성 의류</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/man_cloth.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>남성 의류</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/book.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>중고 서적</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/appliance.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>가전 제품</Text>
                            </TouchableOpacity>
                        </View>
                    </HStack>
                </View>

                <Text style={{ marginTop: '30%', marginLeft: '5%' }}>전체 카테고리</Text>
                <View style={{ marginTop: '5%', justifyContent:"center", alignItems:"center"}}> 
                    <HStack space={5}>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/woman_cloth.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>여성 의류</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/man_cloth.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>남성 의류</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/book.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>중고 서적</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/appliance.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>가전 제품</Text>
                            </TouchableOpacity>
                        </View>
                    </HStack>
                </View>

                <View style={{ marginTop: '5%', justifyContent:"center", alignItems:"center"}}> 
                    <HStack space={5}>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/sports.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>스포츠 용품</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/bag.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>가방</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/digital.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>디지털 제품</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image
                                source={require('../assets/cap.png')}
                                style={{width: 30, height: 30, }}
                                alt="trans_1"
                                />
                                <Text>모자</Text>
                            </TouchableOpacity>
                        </View>
                    </HStack>
                </View>
                
            </NativeBaseProvider>
        </DrawerContentScrollView>
    );
};

const MainDrawerStackScreen = () => {
    return (
        <MainDrawer.Navigator
            screenOptions={{
                headerShown: false
            }}
            drawerContent={ ({navigation}) => <CustomDrawer navigation={navigation} />}
        >
            <MainDrawer.Screen
                name="tabstack"
                component={TabStackScreen}
                options={{}}
            >
            </MainDrawer.Screen>
        </MainDrawer.Navigator>

    )
};

export default MainDrawerStackScreen;