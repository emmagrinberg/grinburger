import {
    AUTHORIZATION_ERROR,
    AUTHORIZATION_REQUEST,
    AUTHORIZATION_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    GET_USER_DATA_ERROR,
    GET_USER_DATA_REQUEST,
    GET_USER_DATA_SUCCESS,
    LOGOUT_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    REGISTRATION_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    UPDATE_ACCESS_TOKEN_REQUEST,
    UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "../actions/user";

export interface IUserState {
    user: IUser | {},

    refreshToken?: string,
    accessToken?: string,

    registrationRequest: boolean,
    registrationError: boolean,
    registrationSuccess: boolean,

    authRequest: boolean,
    authSuccess: boolean,
    authError: boolean,

    logoutRequest: boolean,
    logoutSuccess: boolean,
    logoutError: boolean,

    forgotPasswordRequest: boolean,
    forgotPasswordError: boolean,
    forgotPasswordSuccess: boolean,

    resetPasswordRequest: boolean,
    resetPasswordError: boolean,
    resetPasswordSuccess: boolean,

    getUserDataRequest: boolean,
    getUserDataSuccess: boolean,
    getUserDataError: boolean,

    updateUserRequest: boolean,
    updateUserError: boolean,
    updateUserSuccess: boolean
}

export interface IUser {
    name?: string | undefined,
    email?: string | undefined,
    password?: string | undefined
}

interface IRegistrationRequest {
    type: typeof REGISTRATION_REQUEST
}

interface IRegistrationSuccess {
    type: typeof REGISTRATION_SUCCESS
}

interface IRegistrationError {
    type: typeof REGISTRATION_ERROR
}

interface IAuthorizationRequest {
    type: typeof AUTHORIZATION_REQUEST
}

interface IAuthorizationSuccess {
    type: typeof AUTHORIZATION_SUCCESS
}

interface IAuthorizationError {
    type: typeof AUTHORIZATION_ERROR
}

interface ILogoutRequest {
    type: typeof LOGOUT_REQUEST
}

interface ILogoutSuccess {
    type: typeof LOGOUT_SUCCESS
}

interface ILogoutError {
    type: typeof LOGOUT_ERROR
}

interface IForgotPasswordRequest {
    type: typeof FORGOT_PASSWORD_REQUEST
}

interface IForgotPasswordSuccess {
    type: typeof FORGOT_PASSWORD_SUCCESS
}

interface IForgotPasswordError {
    type: typeof FORGOT_PASSWORD_ERROR
}

interface IResetPasswordRequest {
    type: typeof RESET_PASSWORD_REQUEST
}

interface IResetPasswordSuccess {
    type: typeof RESET_PASSWORD_SUCCESS
}

interface IResetPasswordError {
    type: typeof RESET_PASSWORD_ERROR
}

interface IUpdateAccessTokenRequest {
    type: typeof UPDATE_ACCESS_TOKEN_REQUEST
}

interface IGetUserDataRequest {
    type: typeof GET_USER_DATA_REQUEST
}

interface IGetUserDataSuccess {
    type: typeof GET_USER_DATA_SUCCESS,
    user: IUser | {}
}

interface IGetUserDataError {
    readonly type: typeof GET_USER_DATA_ERROR
}

interface IUpdateUserRequest {
    type: typeof UPDATE_USER_REQUEST
}

interface IUpdateUserSuccess {
    type: typeof UPDATE_USER_SUCCESS,
    action: IUser | {},
    email?: string,
    name?: string
}

interface IUpdateUserError {
    type: typeof UPDATE_USER_ERROR
}

export type TUserActions =
    | IRegistrationRequest
    | IRegistrationSuccess
    | IRegistrationError
    | IAuthorizationRequest
    | IAuthorizationSuccess
    | IAuthorizationError
    | ILogoutRequest
    | ILogoutSuccess
    | ILogoutError
    | IForgotPasswordRequest
    | IForgotPasswordSuccess
    | IForgotPasswordError
    | IResetPasswordRequest
    | IResetPasswordSuccess
    | IResetPasswordError
    | IUpdateAccessTokenRequest
    | IGetUserDataRequest
    | IGetUserDataSuccess
    | IGetUserDataError
    | IUpdateUserRequest
    | IUpdateUserSuccess
    | IUpdateUserError;