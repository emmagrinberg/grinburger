const BASE_URL = "https://norma.nomoreparties.space/api";

const _checkResponse = (_url: string, response: Response) => response.ok
    ? response.json()
    : Promise.reject(`Ошибка при вызове эндпоинта ${_url}: ${response.status}`);

export async function _request(method: string, url: string, body: object) {
    const response = await fetch(BASE_URL + url, {
        method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.accessToken
        },
        body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.detail);
    }

    return data;
}

// выполнение POST-запроса
export async function post(url: string, body: object) {
    return _request("POST", url, body);
}

// выполнение PATCH-запроса
export async function patch(url: string, body: object) {
    return _request("PATCH", url, body);
}

// выполнение GET-запроса
export async function get(url: string) {
    const URL = BASE_URL + url;
    return fetch(URL, {
        method: "GET",
        headers: {
            "Content-Type": 'application/json',
            "Authorization": localStorage.accessToken
        }
    })
        .then(response => _checkResponse(URL, response))
        .then(data => data);
}

/**
 * Получение списка ингредиентов
 */
export async function getIngredientList() {
    const URL = `${BASE_URL}/ingredients`;
    return fetch(URL)
        .then(response => _checkResponse(URL, response))
        .then(data => data);
}