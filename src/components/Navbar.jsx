
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/Logo.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoLogInOutline } from "react-icons/io5";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="details">Details</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>

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
                <a className=" lg:text-4xl text-2xl font-extrabold text-green-900"><i>ECO Tr@vel</i></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-green-800   font-bold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-10">
                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-outline btn-success font-semibold "><span className="text-xl text-black"><IoLogInOutline /></span>Log-Out</button>
                ) : (
                    <Link to="/auth/login" className="btn btn-outline btn-success font-semibold "> <span className="text-xl text-black"><IoLogInOutline /></span>Login</Link>)
                }

                <img className=" hidden lg:block
                 w-[150px]" src={logoImg} alt="" />
                <div className="">{user && user.name}</div>
            </div>
        </div>
    );
};

export default Navbar;