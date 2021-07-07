import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Text, View, StyleSheet } from "react-native";

import { Container } from "../../components";

import { Colors, TestStyles } from "../../shared/styles";
import { IState } from "../../interfaces/appInterfaces";

type Props = {
    store: IState
};

@inject("store")
@observer
class LoginScreen extends Component<Props, {}> {
    render() {
        const { email, password, city, date, registered } = this.props.store.getUserData;

        return (
            <Container>
                { registered
                    ? (
                      <View style={ styles.userDataWrapper } >
                          <Text style={ styles.title } >User data:</Text>
                          <Text style={ styles.textField } >
                              Email: <Text style={ styles.textFieldData } >{ email }</Text>
                          </Text>
                          <Text style={ styles.textField } >
                              Password: <Text style={ styles.textFieldData } >{ password }</Text>
                          </Text>
                          <Text style={ styles.textField } >
                              City: <Text style={ styles.textFieldData } >{ city }</Text>
                          </Text>
                          <Text style={ styles.textField } >
                              Register date: <Text style={ styles.textFieldData } >{ date }</Text>
                          </Text>
                      </View>)
                    : <Text>Login screen</Text>
                }
            </Container>
        )
    }
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
