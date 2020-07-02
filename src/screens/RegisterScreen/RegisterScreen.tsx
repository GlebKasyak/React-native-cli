import React, { FC } from "react";
import { Button, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { Container, TextField, DatePicker, CityList, CheckBoxComponent } from "../../components";
import { CityItemType } from "../../shared/CityList";
import { FromDataType } from "./InitialFormData";

type Props = {
    onChange: (value: string, field: string) => void,
    onDataChange: (event: Event, currentDate?: Date) => void,
    onToggle: () => void,
    onPress: () => void,
    date: Date,
    cityList: Array<CityItemType>,
    formData: FromDataType,
    checkBoxValue: { error: string, value: boolean }
};

const RegisterScreen: FC<Props> = (
    {
        onChange,
        onDataChange,
        onToggle,
        onPress,
        date,
        cityList,
        formData,
        checkBoxValue
    }) => (
    (
        <KeyboardAwareScrollView scrollEnabled contentContainerStyle={{ flexGrow: 1 }} >
            <Container>
                <TextField
                    onChange={ onChange }
                    error={ formData.email.error }
                    fieldName="email"
                    label="Email"
                    placeholder="Email"
                />
                <TextField
                    onChange={ onChange }
                    error={ formData.password.error }
                    fieldName="password"
                    placeholder="Password"
                    label="Password"
                    secureTextEntry={true}
                />
                <DatePicker
                    date={ date }
                    onChange={ onDataChange }
                />
                <CityList
                    setCity={ (city: string) => onChange(city, "city") }
                    list={ cityList }
                    currentCity={ formData.city.value }
                    error={ formData.city.error }
                />
                <CheckBoxComponent
                    value={ checkBoxValue.value }
                    error={ checkBoxValue.error }
                    onChange={ onToggle }
                />
                <View style={{ marginTop: 10 }} >
                    <Button title="Register" onPress={ onPress } />
                </View>
            </Container>
        </KeyboardAwareScrollView>
    )
);

export default RegisterScreen;
