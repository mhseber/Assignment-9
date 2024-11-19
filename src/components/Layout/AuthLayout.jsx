import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const AuthLayout = () => {
    return (
        <div>

            <header className="">
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;