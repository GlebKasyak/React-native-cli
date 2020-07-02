import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";

import { Colors } from "../../shared/styles";

type Props = {
    message: string
};

const ErrorMessage: FC<Props> = ({ message }) => <Text style={ styles.error } >{ message }</Text>;

const styles = StyleSheet.create({
    error: {
        color: Colors.red
    }
});

export default ErrorMessage;
