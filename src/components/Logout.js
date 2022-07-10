import { Redirect } from "react-router-dom";

const Logout = (props) => {
    props.setIsAuth(false);
    localStorage.removeItem("user");
    return (
        <Redirect to="/login" />
    );
}

export default Logout;