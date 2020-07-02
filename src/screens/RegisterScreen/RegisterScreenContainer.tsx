import React, { FC, useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch } from "react-redux";

import RegisterScreen from "./RegisterScreen";

import { appActions } from "../../store/actions/app.action";
import { Navigation } from "../../shared/constants";
import { AuthNavigation } from "../../navigation/interfaces";
import { CityItemType, CITY_LIST } from "../../shared/CityList";
import { FieldNames, getInputValidationState } from "../../shared/validation/validate";
import { FromDataType, initialFormData } from "./InitialFormData";

type Props = {
    navigation: StackNavigationProp<AuthNavigation, Navigation.Register>
};

const RegisterScreenContainer: FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());
    const [cityList, setCityList] = useState<Array<CityItemType>>([]);
    const [checkBoxValue, setCheckBoxValue] = useState({
        error: "",
        value: false
    });
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (value: string, field: string) => {
        setFormData({
            ...formData,
            [field]: getInputValidationState({
                input: formData[field as FieldNames],
                value
            })
        })
    };

    const handleDateChange = (event: Event, currentDate?: Date) => {
        setDate(currentDate || date);
    };

    useEffect(() => {
        let isCancelled = false;
        const getDataList = async () => {
            const data = await new Promise(resolve => {
                setTimeout(() => {
                    resolve(CITY_LIST)
                }, 2000);
            }) as Array<CityItemType>;

            if(!isCancelled) {
                setCityList(data)
            }
        }

        getDataList();

        return () => {
            isCancelled = true;
        }
    }, []);

    const toggleHandler = () => {
        setCheckBoxValue({ error: "", value: !checkBoxValue.value });
    };

    const handlePress = () => {
        const updatedInputs = {} as FromDataType;

        for(const key in formData) {
            updatedInputs[formData[key as FieldNames].name] = getInputValidationState({
                input: formData[key as FieldNames],
                value: formData[key as FieldNames].value
            }) as any;
        };

        if(!checkBoxValue.value) {
            setCheckBoxValue({ ...checkBoxValue, error: "Is required" })
        };

        setFormData(updatedInputs);
        if(Object.values(updatedInputs).some(field => !field.error)) {
            dispatch(appActions.setAppData({
                city: formData.city.value,
                date,
                email: formData.email.value,
                password: formData.password.value
            }));
            navigation.navigate(Navigation.Login)
        }
    };

    return <RegisterScreen
        onChange={ handleChange }
        onDataChange={ handleDateChange }
        onToggle={ toggleHandler }
        onPress={ handlePress }
        date={ date }
        cityList={ cityList }
        formData={ formData }
        checkBoxValue={ checkBoxValue }
    />
};

export default RegisterScreenContainer;
