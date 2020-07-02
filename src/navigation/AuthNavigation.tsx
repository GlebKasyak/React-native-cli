import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen, RegisterScreen } from "../screens";
import { AuthHeader } from "../components";
import { Colors } from "../shared/styles";
import { Navigation } from "../shared/constants";


const Stack = createStackNavigator();

const AuthNavigation = () => (
    <Stack.Navigator
        initialRouteName={ Navigation.Login }
        screenOptions={ screenOptions }
    >
        <Stack.Screen
            name={ Navigation.Login }
            component={ LoginScreen }
            options={{
                header: ({ navigation }) =>
                    <AuthHeader
                        navigation={ navigation }
                        currentScreen={ Navigation.Login }
                        nextScreen={ Navigation.Register }
                    />
            }}
        />
        <Stack.Screen
            name={ Navigation.Register }
            component={ RegisterScreen }
        />
    </Stack.Navigator>
);

const screenOptions = {
    headerTintColor: Colors.blue,
    headerStyle: {
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.blue,
        height: 50
    }
};

export default AuthNavigation;
