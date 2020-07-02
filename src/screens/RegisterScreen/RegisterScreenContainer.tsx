import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { StackNavigationProp } from "@react-navigation/stack";

import RegisterScreen from "./RegisterScreen";

import { Navigation } from "../../shared/constants";
import { AuthNavigation } from "../../navigation/interfaces";
import { CityItemType, CITY_LIST } from "../../shared/CityList";
import { FieldNames, getInputValidationState } from "../../shared/validation/validate";
import { FromDataType, initialFormData } from "./InitialFormData";
import { IState } from "../../interfaces/appInterfaces";

type Props = {
    navigation: StackNavigationProp<AuthNavigation, Navigation.Register>,
    store: IState
};

type State = {
    date: Date,
    cityList: Array<CityItemType>,
    checkBoxValue: { error: string, value: boolean },
    formData: FromDataType
};

@inject("store")
@observer
class RegisterScreenContainer extends Component<Props, State> {
    isCancelled = false;

    state = {
        date: new Date(),
        cityList: [],
        checkBoxValue: {
            error: "",
            value: false
        },
        formData: initialFormData
    };

    async componentDidMount() {
        const data = await new Promise(resolve => {
            setTimeout(() => {
                resolve(CITY_LIST)
            }, 2000);
        }) as Array<CityItemType>;

        if(!this.isCancelled) {
            this.setState({ cityList: data })
        }
    };

    componentWillUnmount() {
        this.isCancelled = true;
    };

    handleChange = (value: string, field: string) => {
        this.setState((state: State) => ({
            ...state,
            formData: {
                ...state.formData,
                [field]: getInputValidationState({
                    input: this.state.formData[field as FieldNames],
                    value
                })
            } as FromDataType
        }));
    };

    handleDateChange = (event: Event, currentDate?: Date) => {
        this.setState({ date: currentDate || this.state.date });
    };

    toggleHandler = () => {
        this.setState({
            checkBoxValue: { error: "", value: !this.state.checkBoxValue.value }
        });
    };

    handlePress = () => {
        const { formData, checkBoxValue, date } = this.state;
        const { store, navigation } = this.props;

        const updatedInputs = {} as FromDataType;

        for(const key in formData) {
            updatedInputs[formData[key as FieldNames].name] = getInputValidationState({
                input: formData[key as FieldNames],
                value: formData[key as FieldNames].value
            }) as any;
        };

        if(!checkBoxValue.value) {
            this.setState((state: State) => ({
                checkBoxValue: { ...state.checkBoxValue, error: "Is required" },
                formData: updatedInputs
            }));
        };

        if(Object.values(updatedInputs).some(field => !field.error)) {
            store.setUserData({
                date,
                city: formData.city.value,
                email: formData.email.value,
                password: formData.password.value,
            });
            navigation.navigate(Navigation.Login)
        }
    };

   render() {
       const { date, cityList, formData, checkBoxValue } = this.state;

       return <RegisterScreen
           onChange={ this.handleChange }
           onDataChange={ this.handleDateChange }
           onToggle={ this.toggleHandler }
           onPress={ this.handlePress }
           date={ date }
           cityList={ cityList }
           formData={ formData }
           checkBoxValue={ checkBoxValue }
       />
   }
};

export default RegisterScreenContainer;
