
const Contact = () => {
    return (
        <div className="bg-slate-100 shadow-2xl shadow-green-500">
            <form className="p-10" >
                {/* name */}
                <div className="mb-4">

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>
                {/* photo Url */}
                <div className="mb-4">

                    <input
                        type="text"
                        id="url"
                        name="photo"
                        placeholder="number"
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>
                {/* Email Field */}
                <div className="mb-4">

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                        required
                    />
                </div>

                {/* Password Field */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">

                    </label>
                    <textarea className="textarea textarea-success lg:w-[500px] w-[400px]" placeholder="Enter your feedback!"></textarea>

                </div>



                <div className="join">
                    <input className="input input-bordered join-item" placeholder="" />
                    <button className="btn join-item rounded-r-full text-white py-2 rounded-md bg-gradient-to-r from-green-600 to-green-900  font-semibold ">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;