import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { DrawerActions } from '@react-navigation/native';


const MenuButton = () => {
    const navigation = useNavigation();
    const openMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <TouchableOpacity>
           <Ionicons 
                name="menu-outline"
                onPress={openMenu} 
                style={{
                    fontSize: 30,
                    marginLeft: 10,
                    marginTop:5,
                    paddingLeft:5,
                    paddingRight:5,
                }}
            />
        </TouchableOpacity>
    );
};

export default MenuButton;