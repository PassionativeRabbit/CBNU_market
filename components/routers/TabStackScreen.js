import React from 'react';
import { Button } from 'react-native';
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
import MenuButton from './MenuButton';
import HeaderRightButton from './HeaderRightButton';
import AlarmListScreen from '../screens/AlarmListScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import RegisterGoodsScreen from '../screens/RegisterGoodsScreen';
import TransactionDetailsScreen from '../screens/TransactionDetailsScreen';

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
        <HomeStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <HomeStack.Screen
                name="homecontainer"
                component={HomeScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}>
                </HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

const SearchStack = createStackNavigator();
const SearchStackScreen = ({navigation}) => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <SearchStack.Screen
                name="searchcontainer"
                component={SearchScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            ></SearchStack.Screen>
        </SearchStack.Navigator>
    );
};

const ShopStack = createStackNavigator();
const ShopStackScreen = ({navigation}) => {
    return (
        <ShopStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <ShopStack.Screen
                name="shopcontainer"
                component={ShopScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </ShopStack.Screen>
        </ShopStack.Navigator>
    );
};

const ChatListStack = createStackNavigator();
const ChatListStackScreen = ({navigation}) => {
    return (
        <ChatListStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <ChatListStack.Screen
                name="chatlistcontainer"
                component={ChatListScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </ChatListStack.Screen>
        </ChatListStack.Navigator>
    );
};

const MyPageStack = createStackNavigator();
export const MyPageStackScreen = ({navigation}) => {
    return (
        <MyPageStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <MyPageStack.Screen
                name="mypagecontainer"
                component={MyPageScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </MyPageStack.Screen>
            <MyPageStack.Screen
                name="alarmlistcontainer"
                component={AlarmListScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </MyPageStack.Screen>
            <MyPageStack.Screen
                name="transactiondetailscontainer"
                component={TransactionDetailsScreen}
                options={{
                    headerLeft:()=> <MenuButton />,
                    headerRight:()=> <HeaderRightButton />,
                }}>
            </MyPageStack.Screen>
        </MyPageStack.Navigator>
    );
};


const LoginStack = createStackNavigator();
export const LoginStackScreen = ({navigation}) => {
    return (
        <LoginStack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
            }}>
            <LoginStack.Screen
                name="logincontainer"
                component={LoginScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </LoginStack.Screen>
            <LoginStack.Screen
                name="alarmlistcontainer"
                component={AlarmListScreen}
                options={{
                    headerLeft: () => <MenuButton />,
                    headerRight: () => <HeaderRightButton />,
                }}
            >
            </LoginStack.Screen>
        </LoginStack.Navigator>
    );
};

const SignupStack = createStackNavigator();
export const SignupStackScreen=({navigation})=>{
    return(
        <SignupStack.Navigator
            screenOptions={{
                headerTitleAlign:'center',
            }}>
        <SignupStack.Screen
            name="signupcontainer"
            component={SignupScreen}
            options={{
                headerLeft:()=> <MenuButton />,
                headerRight:()=> <HeaderRightButton />,
            }}
        >
       </SignupStack.Screen>
       </SignupStack.Navigator>
    );
};

const RegisterGoodsStack = createStackNavigator();
export const RegisterGoodsStackScreen=({navigation})=>{
    return(
        <RegisterGoodsStack.Navigator
            screenOptions={{
                headerTitleAlign:'center',
            }}>
        <RegisterGoodsStack.Screen
            name="registergoodscontainer"
            component={RegisterGoodsScreen}
            options={{
                headerLeft:()=> <MenuButton />,
                headerRight:()=> <HeaderRightButton />,
            }}
        >
       </RegisterGoodsStack.Screen>
       </RegisterGoodsStack.Navigator>
    );
};


const TabStackScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
            initialRouteName="homestack"
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
                name="registergoodsstack"
                component={RegisterGoodsStackScreen}
                options={{
                    tabBarIcon: props => FeatherIconFrame({...props, name:'plus'}),
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

            <Tab.Screen
                name="loginstack"
                component={LoginStackScreen}
                options={{
                    tabBarIcon: props => FeatherIconFrame({...props, name:'user'}), //????????? person-outline ????????????
                }}
            />

            <Tab.Screen
                name="signupstack"
                component={SignupStackScreen}
                options={{
                    tabBarIcon: props => FeatherIconFrame({...props, name:'user'}), //????????? person-outline ????????????
                }}
            />

            

        </Tab.Navigator>
    );
};

export default TabStackScreen;