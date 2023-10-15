import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">SignUp</NavLink>
        </div>
    );
};

export default Header;