import {Navigate, useLocation} from "react-router-dom";
import {isAuth, isTokenExpired} from "../../utils/utils";
import {updateAccessTokenAction} from "../../services/actions/user";
import {paths} from "../../utils/Constants";
import {useDispatch} from "../../services/types";
import {PropsWithChildren} from "react";

export default function ProtectedRouteElement(props: PropsWithChildren<{}>): any {
    const location = useLocation();
    const dispatch = useDispatch();

    if (isTokenExpired()) {
        dispatch(updateAccessTokenAction());
    }

    return !isAuth() ? (
        <Navigate to={paths.LOGIN}
                  state={{from: location}}/>
    ) : (
        props.children
    );
}