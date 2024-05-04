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

export const nutritionTypes = {
    CALORIES: "calories",
    CARBOHYDRATES: "carbohydrates",
    FAT: "fat",
    PROTEINS: "proteins"
};

export const nutritionLabels = {
    [nutritionTypes.CALORIES]: "Калории, ккал",
    [nutritionTypes.CARBOHYDRATES]: "Белки, г",
    [nutritionTypes.FAT]: "Жиры, г",
    [nutritionTypes.PROTEINS]: "Углеводы, г",
}

export const urls = {
    GET_INGREDIENTS: "https://norma.nomoreparties.space/api/ingredients"
}