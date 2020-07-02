import { observable, decorate, computed, action } from "mobx";

import { UserData } from "../interfaces/appInterfaces";

class Store {
    registered = false;
    userData = {
        email: "",
        password: "",
        city: "",
        date: null
    } as UserData;

    get getUserData() {
        const { date } = this.userData;
        let formattedDate =  !!date && `${ date.getDate() } ${ date.getMonth() } ${ date.getFullYear() }`;

        return {
            ...this.userData,
            date: formattedDate,
            registered: this.registered
        };
    };

    setUserData(data: UserData) {
        this.userData = { ...data };
        this.registered = true;
    };
};

decorate(Store, {
    userData: observable,
    getUserData: computed,
    setUserData: action
});

export default new Store();
