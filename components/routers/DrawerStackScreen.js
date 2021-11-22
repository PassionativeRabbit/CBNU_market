import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TabStackScreen from './TabStackScreen';
import MenuButton from './MenuButton';
import { Ionicons } from '@expo/vector-icons';

const MainDrawer = createDrawerNavigator();

const CustomDrawer = ({navigation}) => {
    const goToStack = (stackName) => {
        navigation.navigate(stackName);
    };

    return (
        <DrawerContentScrollView>
            <DrawerItem
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
            </DrawerItem>
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
    );
};

export default MainDrawerStackScreen;