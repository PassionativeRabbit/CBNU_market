import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import mainlayout from "../mainlayout";
import login from "../login";

const screens = {
    mainlayout: {
        screen: mainlayout,
        navigationOptions: () => ({ headerShown: false, })
    },
    login: {
        screen: login,
        navigationOptions: () => ({ headerShown: false, })
    },
}

const trans_stack = createStackNavigator(screens);

export default createAppContainer(trans_stack);