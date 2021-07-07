import React from "react";
import { Provider } from "mobx-react";
import { StatusBar, YellowBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AuthNavigation } from "./src/navigation";
import store from "./src/store";

YellowBox.ignoreWarnings([
    "VirtualizedLists should never be nested",
]);

const App = () => (
    <Provider store={ store } >
        <NavigationContainer>
            <StatusBar barStyle="dark-content"/>
            <AuthNavigation/>
        </NavigationContainer>
    </Provider>
);

export default App;
