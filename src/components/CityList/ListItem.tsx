import React, { FC } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { TestStyles, Colors } from "../../shared/styles";

type Props = {
    onPress: (city: string) => void,
    item: string,
    listLength: number,
    index: number,
    currentItem: string | null
};

const ListItem: FC<Props> = ({ onPress, item, listLength, index, currentItem }) => {
    const { text, borderBottom, isActive } = styles;

    const borderStyle = index === listLength - 1 ? null : borderBottom;
    const isActiveStyle = currentItem === item ? isActive : null;

    return (
        <TouchableOpacity onPress={ onPress.bind(null, item) } >
            <Text style={[ text, borderStyle, isActiveStyle ]}>
                { item }
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomWidth: 1
    },
    text: {
        fontSize: TestStyles.mediumText,
        color: Colors.black,
        paddingVertical: 5,
        textAlign: "center",
    },
    isActive: {
        backgroundColor: Colors.blue,
        color: Colors.white
    }
});

export default ListItem;
