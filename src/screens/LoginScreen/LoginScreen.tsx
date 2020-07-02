import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Text, View, StyleSheet } from "react-native";

import { Container } from "../../components";

import { Colors, TestStyles } from "../../shared/styles";
import { AppSelectors } from "../../store/selectors";
import { AppStateType } from "../../store/reducers";

const LoginScreen: FC = () => {
    const { registered, user } = useSelector((state: AppStateType) => AppSelectors.getAppData(state));
    const { email, password, city, date } = user;

    let formattedDate =  date && `${ date.getDate() } ${ date.getMonth() } ${ date.getFullYear() }`;

    return (
        <Container>
            { registered
                ? (
                  <View style={ styles.userDataWrapper } >
                      <Text style={ styles.title } >User data:</Text>
                      <Text style={ styles.textField } >Email: <Text style={ styles.textFieldData } >{ email }</Text></Text>
                      <Text style={ styles.textField } >Password: <Text style={ styles.textFieldData } >{ password }</Text></Text>
                      <Text style={ styles.textField } >City: <Text style={ styles.textFieldData } >{ city }</Text></Text>
                      <Text style={ styles.textField } >Register date: <Text style={ styles.textFieldData } >{ formattedDate }</Text></Text>
                  </View>)
                : <Text>Login screen</Text>
            }
        </Container>
    )
};

const styles = StyleSheet.create({
    userDataWrapper: {
        backgroundColor: Colors.white,
        padding: 16,
        borderWidth: 2,
        borderColor: Colors.blue
    },
    title: {
        fontSize: TestStyles.largeTest,
        marginBottom: 8,
        fontWeight: "bold",
        color: Colors.black
    },
    textField: {
        paddingVertical: 4,
        fontSize: TestStyles.mediumText,
        color: Colors.black
    },
    textFieldData: {
        color: Colors.blue
    }
});

export default LoginScreen;
