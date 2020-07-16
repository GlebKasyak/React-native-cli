import React, { FC } from "react";
import { FlatList, StyleSheet, ActivityIndicator, View, Text } from "react-native";

import ListItem from "./ListItem";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { CityItemType } from "../../shared/CityList";
import { Colors } from "../../shared/styles";

type Props = {
    setCity: (city: string) => void,
    list: Array<CityItemType>,
    currentCity: string | null,
    error: string
};

const CityList: FC<Props> = ({ setCity, list, currentCity, error }) => (
    <>
        <View style={[ styles.list, !!error && styles.fieldError ]} >
            { !!list.length
                ? (
                    <FlatList
                        data={ list }
                        renderItem={ ({ item, index}) =>
                            <ListItem
                                onPress={ setCity }
                                index={ index }
                                item={ item.city }
                                listLength={ list.length }
                                currentItem={ currentCity }
                            />
                        }
                    />)
                : <ActivityIndicator size="large" color={ Colors.blue } />

            }
        </View>
        { error && <ErrorMessage message={ error } /> }
    </>
);

const styles = StyleSheet.create({
    list: {
        width: "60%",
        height: 200,
        borderWidth: 2,
        borderColor: Colors.blue,
        justifyContent: "center"
    },
    fieldError: {
        borderColor: Colors.red
    }
});

export default CityList;
