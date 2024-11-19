import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                alert(error.code);
            });

    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">User Login</h1>
                <form onSubmit={handleSubmit}>
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
                            href="/forget-password"
                            className="text-sm text-blue-500 hover:underline"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center font-bold ">
                    Dont't Have An Account ? <Link to="/auth/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;