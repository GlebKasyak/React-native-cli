
export type AppState = {
    registered: boolean,
    user: UserData
};

export type UserData = {
    date: Date | null,
    city: string | null,
    email: string,
    password: string
}
