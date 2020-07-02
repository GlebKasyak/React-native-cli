export const initialFormData = {
    email: {
        name: "email" as const,
        value: "",
        error: ""
    },
    password: {
        name: "password" as const,
        value: "",
        error: ""
    },
    city: {
        name: "city" as const,
        value: "",
        error: ""
    },
};

export type FromDataType = typeof initialFormData;
