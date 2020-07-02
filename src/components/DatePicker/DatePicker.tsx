import React, { FC, useState } from "react";
import { View, Button, StyleSheet, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props ={
    date: Date,
    onChange: (event: Event, date?: Date) => void
};

const DatePicker: FC<Props> = ({ date, onChange }) => {
    const [show, setShow] = useState(false);

    const handleChange = (event: Event, date?: Date) => {
        setShow(Platform.OS === "ios");
        onChange(event, date)
    }

    return (
        <View style={ styles.wrapper } >
            <Button
                onPress={ () => setShow(true) }
                title="Show date picker!"
            />
            { show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={ date }
                    onChange={ handleChange }
                    is24Hour={true}
                    textColor={"red"}
                />
            ) }
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 10
    }
});

export default DatePicker;
