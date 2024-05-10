const BASE_URL = "https://norma.nomoreparties.space/api";

const _checkResponse = (_url, response) => response.ok
    ? response.json()
    : Promise.reject(`Ошибка при вызове эндпоинта ${_url}: ${response.status}`);

/**
 * Получение списка ингредиентов
 */
export async function getIngredientList() {
    const URL = `${BASE_URL}/ingredients`;
    return fetch(URL)
        .then(response => _checkResponse(URL, response))
        .then(data => data);
}

/**
 * Создание заказа
 */
export async function createOrder(ingredients) {
    const URL = `${BASE_URL}/orders`;
    return fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ingredients})
    })
        .then(response => _checkResponse(URL, response))
        .then(data => data);
}