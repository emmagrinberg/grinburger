import {get, patch, post} from "../../utils/api";
import {urls} from "../../utils/Constants";
import {updateTokens} from "../../utils/utils";
import {Dispatch} from "redux";
import {IUser, TUserActions} from "../types/user";

export const REGISTRATION_REQUEST: "REGISTRATION_REQUEST" = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS" = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR: "REGISTRATION_ERROR" = "REGISTRATION_ERROR";


export const AUTHORIZATION_REQUEST: "AUTHORIZATION_REQUEST" = "AUTHORIZATION_REQUEST";
export const AUTHORIZATION_SUCCESS: "AUTHORIZATION_SUCCESS" = "AUTHORIZATION_SUCCESS";
export const AUTHORIZATION_ERROR: "AUTHORIZATION_ERROR" = "AUTHORIZATION_ERROR";


export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_ERROR: "LOGOUT_ERROR" = "LOGOUT_ERROR";


export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR" = "FORGOT_PASSWORD_ERROR";


export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR" = "RESET_PASSWORD_ERROR";


export const UPDATE_ACCESS_TOKEN_REQUEST: "UPDATE_ACCESS_TOKEN_REQUEST" = "UPDATE_ACCESS_TOKEN_REQUEST";


export const GET_USER_DATA_REQUEST: "GET_USER_DATA_REQUEST" = "GET_USER_DATA_REQUEST";
export const GET_USER_DATA_SUCCESS: "GET_USER_DATA_SUCCESS" = "GET_USER_DATA_SUCCESS";
export const GET_USER_DATA_ERROR: "GET_USER_DATA_ERROR" = "GET_USER_DATA_ERROR";


export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR: "UPDATE_USER_ERROR" = "UPDATE_USER_ERROR";

export function registrationAction(data: {name: string, email: string, password: string}) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: REGISTRATION_REQUEST
        });
        post(urls.REGISTRATION, data)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: REGISTRATION_SUCCESS
                    });
                } else {
                    dispatch({
                        type: REGISTRATION_ERROR
                    });
                }
            }).catch(() => {
                dispatch({
                    type: REGISTRATION_ERROR
                })
            });
    }
}

export function loginAction(data: {email: string, password: string}) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: AUTHORIZATION_REQUEST
        });
        post(urls.LOGIN, data)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: AUTHORIZATION_SUCCESS
                    });
                    updateTokens(response);
                } else {
                    dispatch({
                        type: AUTHORIZATION_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: AUTHORIZATION_ERROR
                })
            });
    }
}

export function logoutAction(data: {token: string}) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: LOGOUT_REQUEST
        });
        post(urls.LOGOUT, data)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: LOGOUT_SUCCESS
                    });
                } else {
                    dispatch({
                        type: LOGOUT_ERROR
                    });
                }
            }).catch(() => {
                dispatch({
                    type: LOGOUT_ERROR
                })
            });
    }
}

export function forgotPasswordAction(email: string) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: FORGOT_PASSWORD_REQUEST
        });
        post(urls.FORGOT_PASSWORD, {email})
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: FORGOT_PASSWORD_SUCCESS
                    });
                } else {
                    dispatch({
                        type: FORGOT_PASSWORD_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: FORGOT_PASSWORD_ERROR
                })
            });
    }
}

export function resetPasswordAction(body: {password: string, token: string}) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: RESET_PASSWORD_REQUEST
        });
        post(urls.RESET_PASSWORD, body)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: RESET_PASSWORD_SUCCESS
                    });
                } else {
                    dispatch({
                        type: RESET_PASSWORD_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: RESET_PASSWORD_ERROR
                })
            });
    }
}

export function updateAccessTokenAction() {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: UPDATE_ACCESS_TOKEN_REQUEST
        });
        post(urls.TOKEN, {token: localStorage.refreshToken})
            .then(response => {
                if (response && response.success) {
                    updateTokens(response);
                } else {
                    localStorage.clear();
                }
            })
            .catch(() => {
                localStorage.clear();
            });
    }
}

export function getUserDataAction() {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: GET_USER_DATA_REQUEST
        });
        get(urls.USER)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: GET_USER_DATA_SUCCESS,
                        user: response.user
                    });
                } else {
                    dispatch({
                        type: GET_USER_DATA_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: GET_USER_DATA_ERROR
                });
            });
    }
}

export function updateUserDataAction(body: IUser) {
    return function(dispatch: Dispatch<TUserActions>) {
        dispatch({
            type: UPDATE_USER_REQUEST
        });
        patch(urls.USER, body)
            .then(response => {
                if (response && response.success) {
                    dispatch({
                        type: UPDATE_USER_SUCCESS,
                        action: response.user
                    });
                } else {
                    dispatch({
                        type: UPDATE_USER_ERROR
                    });
                }
            })
            .catch(() => {
                dispatch({
                    type: UPDATE_USER_ERROR
                });
            });
    }
}