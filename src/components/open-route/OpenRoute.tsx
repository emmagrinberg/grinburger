import {Navigate, useLocation} from "react-router-dom";
import {paths} from "../../utils/Constants";
import {isAuth} from "../../utils/utils";
import {PropsWithChildren} from "react";
import {useSelector} from "../../services/types";

export default function OpenRoute(props: PropsWithChildren<{}>): any {
    const location = useLocation();
    const {logoutRequest} = useSelector(state => state.user);

    const {children} = props;

    if (logoutRequest) {
        return children;
    }

    if (isAuth()) {
        return <Navigate to={paths.DEFAULT}
                         state={{from: location}}/>;
    }

    return children;
}