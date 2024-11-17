
import { NavLink } from "react-router-dom";
import logoImg from "../assets/Logo.png"
const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="updateProfile">UpdateProfile</NavLink></li>
        <li><NavLink to="userProfile">UserProfile</NavLink></li>

    </>

    return (
        <div className="navbar p-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow
                        text-green-800 text-xs  font-bold">
                        {links}
                    </ul>
                </div>
                <a className=" text-2xl font-extrabold text-green-900"><i>ECO Tr@vel</i></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-green-800 text-xs  font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className="w-[100px]" src={logoImg} alt="" />
            </div>
        </div>
    );
};

export default Navbar;