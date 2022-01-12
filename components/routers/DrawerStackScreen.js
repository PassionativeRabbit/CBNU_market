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

                <Text style={{ marginTop: '10%', textAlign:'center' }}>인기 카테고리</Text>
                <Box style={{ marginTop: '5%', flexDirection: "row", justifyContent: 'space-between', marginLeft:'5%', marginRight:'5%'}}>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/woman_cloth.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>여성 의류</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/man_cloth.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>남성 의류</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/book.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>중고 서적</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/appliance.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>가전 제품</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>

                <Text style={{ marginTop: '30%', marginLeft: '5%' }}>전체 카테고리</Text>
                <Box style={{ marginTop: '5%', flexDirection: "row", justifyContent: 'space-between', marginLeft:'5%', marginRight:'5%'}}>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/woman_cloth.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>여성 의류</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/man_cloth.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>남성 의류</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/book.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>중고 서적</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/appliance.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>가전 제품</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
                <Box style={{ marginTop: '5%', flexDirection: "row", justifyContent: 'space-between', marginLeft:'5%', marginRight:'5%'}}>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/sports.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>스포츠 용품</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/bag.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>가방</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/digital.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>디지털 제품</Text>
                        </TouchableOpacity>
                    </Box>
                    <Box style={{ flexDirection: 'column', alignItems: 'center', justifyContent:'center', }}>
                        <TouchableOpacity>
                            <Image
                            source={require('../assets/cap.png')}
                            style={{width: 50, height: 50, }}
                            alt="trans_1"
                            />
                            <Text style={{textAlign:'center'}}>모자</Text>
                        </TouchableOpacity>
                    </Box>
                </Box>
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