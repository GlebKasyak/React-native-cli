import { Reducer } from "redux";

import * as appTypes from "../types/appTypes";
import { appActions } from "../actions/app.action";
import { AppState } from "../../interfaces/appInterfaces";
import { InferActionsTypes } from "./index";

const initialState: AppState = {
    registered: false,
    user: {
        date: null,
        city: null,
        email: "",
        password: ""
    }
};

type ActionTypes = InferActionsTypes<typeof appActions>;

const reducer: Reducer<AppState, ActionTypes> = (state = initialState, action: ActionTypes): AppState => {
    switch (action.type) {
        case appTypes.SET_APP_DATA:
            return {
                ...state,
                user: action.payload,
                registered: true
            };
        default:
            return state;
    }
};

export default reducer;

