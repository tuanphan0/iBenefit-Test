import { Button } from "antd";
import { getUser, logout } from "../../features/login/tokenAuthSlice";
import { getLocalStorage } from "../../lib/utils";
import { useAppSelector } from '../../app/hooks';
import { useHistory } from "react-router";

const AppLayout = () => {
    const history = useHistory();
    const user = useAppSelector(getUser);
    return (
        <>
            {user &&
                <>
                    {user.email}
                    <Button onClick={() => { logout(); history.push("/login") }}>Logout</Button>
                </>
            }
            {user == null &&
                <>
                    <a href='/login'>Login</a>
                </>
            }

        </>
    );
}
export default AppLayout;