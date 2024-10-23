import ProfileMenu from "./components/ProfileMenu";
import ProfileData from "./components/ProfileData";
import {paths} from "../../utils/Constants";

export default function Profile() {
    return (
        <section>
            <ProfileMenu/>
            {
                window.location.pathname === paths.PROFILE && <ProfileData/>
            }
        </section>
    )
}