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
    UPDATE_USER_ERROR,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS
} from "../actions/user";
import {IUserState, TUserActions} from "../types/user";

const initialState: IUserState = {
    user: {
        name: "",
        email: "",
        password: ""
    },

    registrationRequest: false,
    registrationError: false,
    registrationSuccess: false,

    authRequest: false,
    authSuccess: false,
    authError: false,

    logoutRequest: false,
    logoutSuccess: false,
    logoutError: false,

    forgotPasswordRequest: false,
    forgotPasswordError: false,
    forgotPasswordSuccess: false,

    resetPasswordRequest: false,
    resetPasswordError: false,
    resetPasswordSuccess: false,

    getUserDataRequest: false,
    getUserDataSuccess: false,
    getUserDataError: false,

    updateUserRequest: false,
    updateUserError: false,
    updateUserSuccess: false
}

export const userReducer = (state = initialState, action: TUserActions): IUserState => {
    switch (action.type) {
        case REGISTRATION_REQUEST:
            return {
                ...state,
                registrationRequest: true
            }
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                registrationRequest: false,
                registrationSuccess: true
            }
        case REGISTRATION_ERROR:
            return {
                ...state,
                registrationRequest: false,
                registrationError: true
            }
        case AUTHORIZATION_REQUEST:
            return {
                ...initialState,
                authRequest: true
            }
        case AUTHORIZATION_SUCCESS:
            return {
                ...initialState,
                authRequest: false,
                authSuccess: true,
                refreshToken: localStorage.refreshToken,
                accessToken: localStorage.accessToken
            }
        case AUTHORIZATION_ERROR:
            return {
                ...initialState,
                authRequest: false,
                authError: true
            }
        case LOGOUT_REQUEST:
            return {
                ...initialState,
                logoutRequest: true
            }
        case LOGOUT_SUCCESS:
            localStorage.clear();
            return {
                ...initialState,
                logoutRequest: false,
                logoutSuccess: true
            }
        case LOGOUT_ERROR:
            return {
                ...state,
                logoutRequest: false,
                logoutError: true
            }
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                forgotPasswordRequest: true
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true
            }
        case FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordError: true
            }
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                resetPasswordRequest: true
            }
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordSuccess: true
            }
        case RESET_PASSWORD_ERROR:
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordError: true
            }
        case GET_USER_DATA_REQUEST:
            return {
                ...state,
                getUserDataRequest: true
            }
        case GET_USER_DATA_SUCCESS: {
            const {user} = action;

            return {
                ...state,
                user,
                getUserDataRequest: false,
                getUserDataSuccess: true,
            }
        }
        case GET_USER_DATA_ERROR:
            return {
                ...state,
                user: initialState.user,
                getUserDataRequest: false,
                getUserDataError: true
            }
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                updateUserRequest: true
            }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.email,
                    name: action.name
                },
                updateUserRequest: false,
                updateUserSuccess: true,
            }
        }
        case UPDATE_USER_ERROR:
            return {
                ...state,
                updateUserRequest: false,
                updateUserError: true
            }
        default:
            return initialState;
    }
}