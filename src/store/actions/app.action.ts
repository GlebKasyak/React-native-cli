
import * as appTypes from "../types/appTypes";
import { UserData } from "../../interfaces/appInterfaces";

export const appActions = {
    setAppData: (payload: UserData) => ({ type: appTypes.SET_APP_DATA, payload } as const),
};
