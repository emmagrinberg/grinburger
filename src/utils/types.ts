export enum Category {
    BUN = "bun",
    SAUCE = "sauce",
    MAIN = "main"
}

export enum NutritionType {
    CALORIES = "calories",
    CARBOHYDRATES = "carbohydrates",
    FAT = "fat",
    PROTEINS = "proteins"
}

export interface IIngredient {
    _id: string,
    name: string,
    type: Category,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile?: string,
    image_large?: string,
    __v?: number,
    uid?: string
}

export interface IDraggableIngredient {
    uid?: string,
    index: number,
    image: string,
    name: string,
    price: number,
    changeOrder: Function
}

export interface IBun {
    image: string,
    name: string,
    price: number,
    type: "top" | "bottom"
}

