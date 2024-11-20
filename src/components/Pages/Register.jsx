import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        // form data
        const form = new FormData(e.target);
        const name = form.get("name")
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        console.log({ name, email, photo, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl shadow-green-600 rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-green-800">User Register</h1>
                <form onSubmit={handleSubmit}>
                    {/* name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* photo Url */}
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">
                            URL
                        </label>
                        <input
                            type="text"
                            id="url"
                            name="photo"
                            placeholder="photo url"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Forget Password Link */}
                    <div className="mb-6 text-right">
                        <a
                            href="/auth/register"
                            className="text-sm text-green-800 hover:underline"
                        >
                            Forgat Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-2 rounded-md bg-gradient-to-r from-green-600 to-green-900 text-white font-semibold"
                    >
                        Register
                    </button>
                </form>
                <p className="text-center font-bold pt-5 ">
                    All ready Have An Account ?
                    <Link to="/auth/login"><span className="text-green-800 pl-5">Login</span></Link>
                </p>
            </div>
        </div>
    );
};

export default Register;