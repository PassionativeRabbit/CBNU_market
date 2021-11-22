import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ShopScreen from '../screens/ShopScreen';
import ChatListScreen from '../screens/ChatListScreen';
import MyPageScreen from '../screens/MyPageScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const IonIconFrame = ({name, size, color}) => {
    return <Ionicons name={name} size={size} color={color} />;
};
const MaterialIconFrame = ({name, size, color}) => {
    return <MaterialIcons name={name} size={size} color={color} />;
};
const FeatherIconFrame = ({name, size, color}) => {
    return <Feather name={name} size={size} color={color} />;
};

const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="homecontainer"
                component={HomeScreen}
                options={{}}    
            ></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = ({navigation}) => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="searchcontainer"
                component={SearchScreen}
                options={{}}
            ></SearchStack.Screen>
        </SearchStack.Navigator>
    );
};

const ShopStack = createStackNavigator();
const ShopStackScreen = ({navigation}) => {
    return (
        <ShopStack.Navigator>
            <ShopStack.Screen
                name="shopcontainer"
                component={ShopScreen}
                options={{}}
            >
            </ShopStack.Screen>
        </ShopStack.Navigator>
    );
};

const ChatListStack = createStackNavigator();
const ChatListStackScreen = ({navigation}) => {
    return (
        <ChatListStack.Navigator>
            <ChatListStack.Screen
                name="chatlistcontainer"
                component={ChatListScreen}
                options={{}}
            >
            </ChatListStack.Screen>
        </ChatListStack.Navigator>
    );
};

const MyPageStack = createStackNavigator();
const MyPageStackScreen = ({navigation}) => {
    return (
        <MyPageStack.Navigator>
            <MyPageStack.Screen
                name="mypagecontainer"
                component={MyPageScreen}
                options={{}}
            >
            </MyPageStack.Screen>
        </MyPageStack.Navigator>
    );
};

const TabStackScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen 
                name="homestack" 
                component={HomeStackScreen} 
                options={{
                    tabBarIcon: props => IonIconFrame({...props, name:'home-outline'}),
                }}
            />
            <Tab.Screen 
                name="searchstack" 
                component={SearchStackScreen} 
                options={{
                    tabBarIcon: props => IonIconFrame({...props, name:'search'}),
                }}
            />
            <Tab.Screen 
                name="shopstack" 
                component={ShopStackScreen} 
                options={{
                    tabBarIcon: props => MaterialIconFrame({...props, name:'storefront'}),
                }}    
            />
            <Tab.Screen 
                name="chatliststack" 
                component={ChatListStackScreen} 
                options={{
                    tabBarIcon: props => IonIconFrame({...props, name: 'chatbubble-ellipses-outline'}),
                }}
            />
            <Tab.Screen 
                name="mypagestack" 
                component={MyPageStackScreen} 
                options={{
                    tabBarIcon: props => FeatherIconFrame({...props, name:'user'}),
                }}    
            />
        </Tab.Navigator>
    );
};

export default TabStackScreen;