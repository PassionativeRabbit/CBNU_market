import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const HeaderRightButton = () => {
    const navigation = useNavigation();
    const goToStack = (stackName) => {
        navigation.navigate(stackName);
    };

    return (
        <TouchableOpacity style={{flexDirection:'row'}}>
           <Ionicons 
                name="search"
                onPress={() => goToStack('searchstack')}
                style={{
                    fontSize: 25,
                    marginRight: 2.5,
                    marginTop:5,
                    paddingLeft:5,
                    paddingRight:5,
                }}
            />
            <Fontisto 
                 name="bell"
                 onPress={() => goToStack('alarmlistcontainer')}
                 style={{
                     fontSize: 24,
                     marginRight: 10,
                     marginTop:5,
                     paddingLeft:5,
                     paddingRight:5,
                 }}
             />
        </TouchableOpacity>
    );
};

export default HeaderRightButton;