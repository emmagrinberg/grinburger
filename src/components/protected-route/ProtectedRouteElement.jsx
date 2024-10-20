import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {isAuth, isTokenExpired} from "../../utils/utils";
import {useDispatch} from "react-redux";
import {updateAccessTokenAction} from "../../services/actions/user";
import {paths} from "../../utils/Constants";

export default function ProtectedRouteElement({children}) {
    const location = useLocation();
    const dispatch = useDispatch();

    if (!isAuth()) {
        return (
            <Navigate to={paths.LOGIN}
                      state={{from: location}}/>
        );
    }

    if (isTokenExpired()) {
        dispatch(updateAccessTokenAction());
    }

    return children;
}

ProtectedRouteElement.propTypes = {
    children: PropTypes.node.isRequired
}