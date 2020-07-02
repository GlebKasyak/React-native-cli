import React, { FC } from "react";
import { TextInput, Text, View, StyleSheet } from "react-native";

import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { Colors, TestStyles } from "../../shared/styles";

type Props = {
    onChange: (value: string, field: string) => void,
    error?: string,
    label: string,
    fieldName: string,
    placeholder: string,
    secureTextEntry?: boolean
};

const TextField: FC<Props> = ({ onChange, error, label, fieldName, placeholder, ...props}) => (
    <View style={ styles.wrapper } >
        <Text style={ styles.label } >{ label }</Text>
        <TextInput
            onChangeText={ text => onChange(text, fieldName) }
            style={[ styles.textInput, error ? styles.fieldError : null ]}
            placeholder={ placeholder }
            { ...props }
        />
        { !!error && <ErrorMessage message={ error } /> }
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        width: "80%",
    },
    label: {
        fontSize: TestStyles.smallText,
        color: Colors.black
    },
    textInput: {
        borderWidth: 2,
        borderColor: Colors.blue,
        marginVertical: 4,
        paddingHorizontal: 10,
        color: Colors.black,
        fontSize: TestStyles.mediumText
    },
    fieldError: {
        borderColor: Colors.red
    }
});

export default TextField;
