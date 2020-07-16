import React, { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { Colors, TestStyles } from "../../shared/styles";

type Props = {
    value: boolean,
    error?: string,
    onChange: () => void
};

const CheckBoxComponent: FC<Props> = ({ value, error, onChange }) => (
    <View style={ styles.wrapper } >
        <Text style={ styles.text } >Click me</Text>
        <CheckBox
            value={ value }
            onValueChange={ onChange }
            tintColors={{ true: Colors.blue }}
        />
        { error && <ErrorMessage message={ error } /> }
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: TestStyles.mediumText
    }
});

export default CheckBoxComponent;
