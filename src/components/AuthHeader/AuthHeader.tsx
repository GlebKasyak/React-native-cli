import React, { FC } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack"

import { Navigation } from "../../shared/constants";
import { Colors, TestStyles } from "../../shared/styles";
import Icon from "react-native-vector-icons/AntDesign";

type Props = {
    navigation: StackNavigationProp<any>,
    currentScreen: Navigation,
    nextScreen: Navigation
};


const AuthHeader: FC<Props> = ({ navigation, currentScreen, nextScreen }) => {
    return (
        <View style={ styles.headerStyle } >
            <Text style={ styles.headerTitleStyle } >{ currentScreen }</Text>
            <TouchableOpacity onPress={ () => navigation.navigate(nextScreen) } style={ styles.rightBtn } >
                <Text>{ nextScreen }</Text>
                <Icon style={ styles.icon } name="rightcircleo" size={20}  />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        elevation: 0,
        borderBottomWidth: 1.5,
        borderBottomColor: Colors.blue,
        paddingHorizontal: 8
    },
    headerTitleStyle: {
        color: Colors.blue,
        fontSize: TestStyles.largeTest
    },
    rightBtn: {
        flexDirection: "row",
    },
    icon: {
        color: Colors.blue,
        marginLeft: 6
    }
});


export default AuthHeader;
