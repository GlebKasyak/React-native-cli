import { AppStateType } from "../reducers";

export class AppSelectors {
    static getAppData = (state: AppStateType) => state.app
};
