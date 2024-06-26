import PropTypes from "prop-types";
import {categories, nutrition} from "./Constants";

export const categoryKeys = PropTypes.oneOf(Object.values(categories)).isRequired;

export const ingredientType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: categoryKeys,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number
});

export const nutritionKeys = PropTypes.oneOf(Object.values(nutrition)).isRequired;