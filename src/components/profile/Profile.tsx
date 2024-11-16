import ProfileMenu from "./components/ProfileMenu";
import ProfileData from "./components/ProfileData";
import {paths} from "../../utils/Constants";
import {ReactElement} from "react";

export default function Profile(): ReactElement {
    return (
        <section>
            <ProfileMenu/>
            {
                window.location.pathname === paths.PROFILE && <ProfileData/>
            }
        </section>
    )
}