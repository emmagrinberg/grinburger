import {Navigate, useLocation} from "react-router-dom";
import {paths} from "../../utils/Constants";
import PropTypes from "prop-types";
import {isAuth} from "../../utils/utils";
import {useSelector} from "react-redux";

export default function OpenRoute({children}) {
    const location = useLocation();
    const {logoutRequest} = useSelector(state => state.user);

    if (logoutRequest) {
        return children;
    }

    if (isAuth()) {
        return <Navigate to={paths.DEFAULT}
                         state={{from: location}}/>;
    }

    return children;
}

OpenRoute.propTypes = {
    children: PropTypes.node.isRequired
}