import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TabStackScreen from './TabStackScreen';
import MenuButton from './MenuButton';

const MainDrawer = createDrawerNavigator();

const MainDrawerStackScreen = () => {
    return (
        <MainDrawer.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <MainDrawer.Screen
                name="tabstack"
                component={TabStackScreen}
                optins={{}}
            >
            </MainDrawer.Screen>
        </MainDrawer.Navigator>
    );
};

export default MainDrawerStackScreen;