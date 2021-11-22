import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabStackScreen from './components/routers/TabStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <TabStackScreen />
    </NavigationContainer>
  );
}