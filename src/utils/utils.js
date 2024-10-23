import {storageKeys} from "./Constants";

export const isAuth = () => localStorage.refreshToken;

export const updateTokens = response => {
    localStorage.setItem(storageKeys.REFRESH_TOKEN, response.refreshToken);
    localStorage.setItem(storageKeys.ACCESS_TOKEN, response.accessToken);
    localStorage.setItem(storageKeys.CREATION_TIME, `${Date.now() / 1000}`);
}

export const isTokenExpired = () => {
    if (!localStorage.creationTime) {
        return true;
    }

    return (Date.now() / 1000) > (parseFloat(localStorage.creationTime) + 1200);
}