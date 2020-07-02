export type UserData = {
    date: Date | null,
    city: string | null,
    email: string,
    password: string
}

export type IState = {
    userData: UserData,
    readonly getUserData: UserData & { registered: boolean };
    setUserData(data: UserData): void
};


