import React, { FC } from "react";
import { View, StyleSheet } from "react-native";

import { Colors } from "../../shared/styles";

const Container: FC = ({ children }) => (
    <View style={ styles.container } >
        { children }
    </View>
);

const styles = StyleSheet.create({
    container: {
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.liteGray,
        height: "100%"
    }
});

export default Container;
