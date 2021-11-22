import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerStackScreen from './components/routers/DrawerStackScreen';
import TabStackScreen from './components/routers/TabStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawerStackScreen />
    </NavigationContainer>
  );
}