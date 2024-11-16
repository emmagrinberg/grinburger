export const categories = {
    BUN: "bun",
    SAUCE: "sauce",
    MAIN: "main"
}

export const categoryLabels = {
    [categories.BUN]: "Булки",
    [categories.SAUCE]: "Соусы",
    [categories.MAIN]: "Начинки"
}

export const nutrition = {
    CALORIES: "calories",
    CARBOHYDRATES: "carbohydrates",
    FAT: "fat",
    PROTEINS: "proteins"
};

export const nutritionLabels = {
    [nutrition.CALORIES]: "Калории, ккал",
    [nutrition.CARBOHYDRATES]: "Белки, г",
    [nutrition.FAT]: "Жиры, г",
    [nutrition.PROTEINS]: "Углеводы, г",
}

export const urls = {
    FORGOT_PASSWORD: "/password-reset",
    RESET_PASSWORD: "/password-reset/reset",

    REGISTRATION: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    TOKEN: "/auth/token",
    USER: "/auth/user",

    GET_INGREDIENTS: "/ingredients",
    CREATE_ORDER: "/orders",
}

export const paths = {
    DEFAULT: "/",

    FEED: "/feed",

    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",

    PROFILE: "/profile",
    ORDERS: "/profile/orders",
    ORDER: "/profile/orders/:number",

    INGREDIENT: "/ingredients/:id"
}

export const fieldNames = {
    NAME: "name",
    EMAIL: "email",
    PASSWORD: "password",
    TOKEN: "token"
}

export const storageKeys = {
    REFRESH_TOKEN: "refreshToken",
    ACCESS_TOKEN: "accessToken",
    CREATION_TIME: "creationTime"
}